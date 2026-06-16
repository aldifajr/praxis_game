import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:go_router/go_router.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:firebase_auth/firebase_auth.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen>
    with SingleTickerProviderStateMixin {
  final _formKey = GlobalKey<FormState>();
  final _accountController = TextEditingController();
  final _passwordController = TextEditingController();
  final _accountFocusNode = FocusNode();
  final _passwordFocusNode = FocusNode();

  bool _isRobotChecked = false;
  bool _obscurePassword = true;
  bool _rememberMe = false;
  bool _isLoading = false;
  String? _errorMessage;

  late final AnimationController _animController;
  late final Animation<double> _fadeAnim;
  late final Animation<Offset> _slideAnim;

  static const _rememberMeKey = 'remember_me';
  static const _savedAccountKey = 'saved_account';

  @override
  void initState() {
    super.initState();
    _animController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 600),
    );
    _fadeAnim = CurvedAnimation(parent: _animController, curve: Curves.easeOut);
    _slideAnim = Tween<Offset>(
      begin: const Offset(0, 0.08),
      end: Offset.zero,
    ).animate(CurvedAnimation(parent: _animController, curve: Curves.easeOut));
    _animController.forward();
    _loadSavedAccount();
  }

  Future<void> _loadSavedAccount() async {
    final prefs = await SharedPreferences.getInstance();
    final remember = prefs.getBool(_rememberMeKey) ?? false;
    if (remember) {
      final saved = prefs.getString(_savedAccountKey) ?? '';
      setState(() {
        _rememberMe = true;
        _accountController.text = saved;
      });
    }
  }

  @override
  void dispose() {
    _accountController.dispose();
    _passwordController.dispose();
    _accountFocusNode.dispose();
    _passwordFocusNode.dispose();
    _animController.dispose();
    super.dispose();
  }

  String? _validateAccount(String? value) {
    final v = value?.trim() ?? '';
    if (v.isEmpty) return 'Nomor atau Email wajib diisi';
    final emailRe = RegExp(r'^[^@\s]+@[^@\s]+\.[^@\s]+$');
    final phoneRe = RegExp(r'^\+?[0-9]{8,15}$');
    if (!emailRe.hasMatch(v) && !phoneRe.hasMatch(v)) {
      return 'Masukkan email atau nomor telepon yang valid';
    }
    return null;
  }

  String? _validatePassword(String? value) {
    if (value == null || value.isEmpty) return 'Kata sandi wajib diisi';
    if (value.length < 6) return 'Kata sandi minimal 6 karakter';
    return null;
  }

  Future<void> _login() async {
    setState(() => _errorMessage = null);

    if (!_formKey.currentState!.validate()) return;

    if (!_isRobotChecked) {
      setState(() =>
          _errorMessage = 'Silakan centang "Saya bukan robot" terlebih dahulu');
      return;
    }

    setState(() => _isLoading = true);

    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setBool(_rememberMeKey, _rememberMe);
      if (_rememberMe) {
        await prefs.setString(_savedAccountKey, _accountController.text.trim());
      } else {
        await prefs.remove(_savedAccountKey);
      }

      // Uncomment when Firebase is initialized:
      // await FirebaseAuth.instance.signInWithEmailAndPassword(
      //   email: _accountController.text.trim(),
      //   password: _passwordController.text,
      // );
      await Future.delayed(const Duration(seconds: 1));

      if (mounted) context.go('/home');
    } on FirebaseAuthException catch (e) {
      setState(() => _errorMessage = _mapFirebaseError(e.code));
    } catch (e) {
      setState(() => _errorMessage = 'Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      if (mounted) setState(() => _isLoading = false);
    }
  }

  String _mapFirebaseError(String code) {
    switch (code) {
      case 'user-not-found':
        return 'Akun tidak ditemukan. Periksa email atau nomor Anda.';
      case 'wrong-password':
        return 'Kata sandi salah. Silakan coba lagi.';
      case 'invalid-email':
        return 'Format email tidak valid.';
      case 'user-disabled':
        return 'Akun Anda telah dinonaktifkan.';
      case 'too-many-requests':
        return 'Terlalu banyak percobaan. Coba lagi beberapa saat.';
      default:
        return 'Login gagal. Silakan coba lagi.';
    }
  }

  void _showForgotPasswordDialog() {
    final resetCtrl = TextEditingController();
    showDialog(
      context: context,
      builder: (ctx) => AlertDialog(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
        title: const Text('Lupa Kata Sandi'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Masukkan email Anda dan kami akan mengirimkan tautan untuk mengatur ulang kata sandi.',
              style: TextStyle(fontSize: 14, color: Color(0xFF666666)),
            ),
            const SizedBox(height: 16),
            TextField(
              controller: resetCtrl,
              autofocus: true,
              keyboardType: TextInputType.emailAddress,
              decoration: InputDecoration(
                labelText: 'Email',
                hintText: 'contoh@email.com',
                border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(8)),
                focusedBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                  borderSide: const BorderSide(color: Color(0xFFFF1E39)),
                ),
              ),
            ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(ctx).pop(),
            child: const Text('Batal',
                style: TextStyle(color: Color(0xFF666666))),
          ),
          ElevatedButton(
            onPressed: () {
              final email = resetCtrl.text.trim();
              if (email.isEmpty) return;
              Navigator.of(ctx).pop();
              ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(
                  content: Text('Tautan reset dikirim ke $email'),
                  backgroundColor: const Color(0xFFFF1E39),
                  behavior: SnackBarBehavior.floating,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8)),
                ),
              );
            },
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFFFF1E39),
              foregroundColor: Colors.white,
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8)),
            ),
            child: const Text('Kirim'),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final isDesktop = MediaQuery.of(context).size.width > 900;
    return Scaffold(
      backgroundColor: Colors.white,
      body: isDesktop ? _buildDesktopLayout() : _buildMobileLayout(),
    );
  }

  Widget _buildDesktopLayout() {
    return Row(
      children: [
        // Left — branding + illustration
        Expanded(
          child: Container(
            color: const Color(0xFFFF1E39),
            child: Stack(
              children: [
                Positioned.fill(
                  child: SvgPicture.asset(
                    'assets/images/Login.svg',
                    fit: BoxFit.cover,
                  ),
                ),
                Positioned(
                  top: 40,
                  left: 40,
                  child: _buildBrandText(titleSize: 48, subtitleSize: 18),
                ),
              ],
            ),
          ),
        ),
        // Right — login card
        Expanded(
          child: Container(
            color: const Color(0xFFF5F5F5),
            child: Center(
              child: SingleChildScrollView(
                padding: const EdgeInsets.all(24),
                child: ConstrainedBox(
                  constraints: const BoxConstraints(maxWidth: 480),
                  child: _buildAnimatedCard(),
                ),
              ),
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildMobileLayout() {
    return Container(
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [Color(0xFFFF1E39), Color(0xFFF5F5F5)],
          stops: [0.0, 0.35],
        ),
      ),
      child: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 28),
              child: _buildBrandText(titleSize: 40, subtitleSize: 15),
            ),
            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.fromLTRB(16, 0, 16, 24),
                child: _buildAnimatedCard(),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildBrandText({required double titleSize, required double subtitleSize}) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Praxis',
          style: TextStyle(
            color: Colors.white,
            fontSize: titleSize,
            fontWeight: FontWeight.bold,
            letterSpacing: 2,
          ),
        ),
        const SizedBox(height: 6),
        Text(
          'Now everyone can master money',
          style: TextStyle(
            color: Colors.white.withOpacity(0.9),
            fontSize: subtitleSize,
          ),
        ),
      ],
    );
  }

  Widget _buildAnimatedCard() {
    return FadeTransition(
      opacity: _fadeAnim,
      child: SlideTransition(
        position: _slideAnim,
        child: _buildLoginCard(),
      ),
    );
  }

  Widget _buildLoginCard() {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.1),
            blurRadius: 20,
            offset: const Offset(0, 10),
          ),
        ],
      ),
      child: Form(
        key: _formKey,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            _buildCardHeader(),
            Padding(
              padding: const EdgeInsets.all(32),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Align(
                    alignment: Alignment.center,
                    child: Text(
                      'Silakan Login ke Akun Anda',
                      style: TextStyle(
                        fontSize: 16,
                        color: Color(0xFF333333),
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  ),
                  const SizedBox(height: 24),
                  _buildErrorBanner(),
                  _buildAccountField(),
                  const SizedBox(height: 16),
                  _buildPasswordField(),
                  const SizedBox(height: 8),
                  _buildRememberForgotRow(),
                  const SizedBox(height: 20),
                  _buildCaptcha(),
                  const SizedBox(height: 24),
                  _buildLoginButton(),
                  const SizedBox(height: 20),
                  _buildDivider(),
                  const SizedBox(height: 20),
                  _buildSocialRow(),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildCardHeader() {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
      decoration: const BoxDecoration(
        color: Color(0xFFFF1E39),
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
      child: const Row(
        children: [
          Icon(Icons.person_outline, color: Colors.white, size: 28),
          SizedBox(width: 12),
          Text(
            'Login Pengguna',
            style: TextStyle(
              color: Colors.white,
              fontSize: 18,
              fontWeight: FontWeight.bold,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildErrorBanner() {
    if (_errorMessage == null) return const SizedBox.shrink();
    return Padding(
      padding: const EdgeInsets.only(bottom: 20),
      child: Container(
        width: double.infinity,
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
        decoration: BoxDecoration(
          color: const Color(0xFFFFEBEE),
          borderRadius: BorderRadius.circular(8),
          border: Border.all(
              color: const Color(0xFFFF1E39).withOpacity(0.35)),
        ),
        child: Row(
          children: [
            const Icon(Icons.error_outline,
                color: Color(0xFFFF1E39), size: 18),
            const SizedBox(width: 8),
            Expanded(
              child: Text(
                _errorMessage!,
                style: const TextStyle(
                    color: Color(0xFFB71C1C), fontSize: 13),
              ),
            ),
            GestureDetector(
              onTap: () => setState(() => _errorMessage = null),
              child: const Icon(Icons.close,
                  color: Color(0xFFB71C1C), size: 16),
            ),
          ],
        ),
      ),
    );
  }

  OutlineInputBorder _border(Color color, {double width = 1}) =>
      OutlineInputBorder(
        borderRadius: BorderRadius.circular(8),
        borderSide: BorderSide(color: color, width: width),
      );

  InputDecoration _fieldDecoration({
    required String label,
    required String hint,
    required Widget prefixIcon,
    Widget? suffixIcon,
  }) {
    return InputDecoration(
      labelText: label,
      hintText: hint,
      hintStyle: TextStyle(color: Colors.grey[400], fontSize: 14),
      prefixIcon: prefixIcon,
      suffixIcon: suffixIcon,
      contentPadding:
          const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
      border: _border(Colors.grey[300]!),
      enabledBorder: _border(Colors.grey[300]!),
      focusedBorder: _border(const Color(0xFFFF1E39)),
      errorBorder: _border(const Color(0xFFFF1E39)),
      focusedErrorBorder: _border(const Color(0xFFFF1E39), width: 2),
    );
  }

  Widget _buildAccountField() {
    return Semantics(
      label: 'Nomor atau Email',
      child: TextFormField(
        controller: _accountController,
        focusNode: _accountFocusNode,
        keyboardType: TextInputType.emailAddress,
        textInputAction: TextInputAction.next,
        enabled: !_isLoading,
        validator: _validateAccount,
        onFieldSubmitted: (_) => _passwordFocusNode.requestFocus(),
        decoration: _fieldDecoration(
          label: 'Akun',
          hint: 'Nomor atau Email',
          prefixIcon: const Icon(Icons.person_outline, size: 20),
        ),
      ),
    );
  }

  Widget _buildPasswordField() {
    return Semantics(
      label: 'Kata Sandi',
      child: TextFormField(
        controller: _passwordController,
        focusNode: _passwordFocusNode,
        obscureText: _obscurePassword,
        textInputAction: TextInputAction.done,
        enabled: !_isLoading,
        validator: _validatePassword,
        onFieldSubmitted: (_) => _login(),
        decoration: _fieldDecoration(
          label: 'Kata Sandi',
          hint: 'Masukkan kata sandi',
          prefixIcon: const Icon(Icons.lock_outline, size: 20),
          suffixIcon: IconButton(
            icon: Icon(
              _obscurePassword
                  ? Icons.visibility_off_outlined
                  : Icons.visibility_outlined,
              size: 20,
              color: Colors.grey[500],
            ),
            tooltip: _obscurePassword
                ? 'Tampilkan kata sandi'
                : 'Sembunyikan kata sandi',
            onPressed: _isLoading
                ? null
                : () =>
                    setState(() => _obscurePassword = !_obscurePassword),
          ),
        ),
      ),
    );
  }

  Widget _buildRememberForgotRow() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            SizedBox(
              width: 24,
              height: 24,
              child: Checkbox(
                value: _rememberMe,
                onChanged: _isLoading
                    ? null
                    : (v) => setState(() => _rememberMe = v ?? false),
                activeColor: const Color(0xFFFF1E39),
                materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
              ),
            ),
            const SizedBox(width: 6),
            const Text(
              'Ingat saya',
              style: TextStyle(fontSize: 13, color: Color(0xFF555555)),
            ),
          ],
        ),
        TextButton(
          onPressed: _isLoading ? null : _showForgotPasswordDialog,
          style: TextButton.styleFrom(
            foregroundColor: const Color(0xFFFF1E39),
            padding: EdgeInsets.zero,
            minimumSize: const Size(0, 32),
          ),
          child: const Text(
            'Lupa kata sandi?',
            style: TextStyle(fontSize: 13, fontWeight: FontWeight.w500),
          ),
        ),
      ],
    );
  }

  Widget _buildCaptcha() {
    return AnimatedContainer(
      duration: const Duration(milliseconds: 200),
      width: double.infinity,
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: const Color(0xFFF5F5F5),
        borderRadius: BorderRadius.circular(8),
        border: Border.all(color: Colors.grey[300]!),
      ),
      child: Row(
        children: [
          Checkbox(
            value: _isRobotChecked,
            onChanged: _isLoading
                ? null
                : (v) => setState(() => _isRobotChecked = v ?? false),
            activeColor: const Color(0xFFFF1E39),
          ),
          const Text(
            'Saya bukan robot',
            style: TextStyle(fontSize: 14, color: Color(0xFF333333)),
          ),
          const Spacer(),
          Column(
            children: [
              Icon(Icons.security, color: Colors.grey[500], size: 24),
              Text(
                'reCAPTCHA',
                style: TextStyle(fontSize: 10, color: Colors.grey[500]),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildLoginButton() {
    return SizedBox(
      width: double.infinity,
      height: 48,
      child: ElevatedButton(
        onPressed: _isLoading ? null : _login,
        style: ElevatedButton.styleFrom(
          backgroundColor: const Color(0xFFFF1E39),
          foregroundColor: Colors.white,
          disabledBackgroundColor: const Color(0xFFFF1E39).withOpacity(0.6),
          disabledForegroundColor: Colors.white,
          shape: const StadiumBorder(),
          elevation: 4,
          shadowColor: const Color(0xFFFF1E39).withOpacity(0.4),
        ),
        child: AnimatedSwitcher(
          duration: const Duration(milliseconds: 200),
          child: _isLoading
              ? const SizedBox(
                  key: ValueKey('loading'),
                  width: 22,
                  height: 22,
                  child: CircularProgressIndicator(
                      color: Colors.white, strokeWidth: 2.5),
                )
              : const Text(
                  key: ValueKey('label'),
                  'LOGIN',
                  style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                      letterSpacing: 1),
                ),
        ),
      ),
    );
  }

  Widget _buildDivider() {
    return Row(
      children: [
        Expanded(child: Divider(color: Colors.grey[300])),
        Container(
          margin: const EdgeInsets.symmetric(horizontal: 12),
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
          decoration: BoxDecoration(
            color: const Color(0xFFFF1E39),
            borderRadius: BorderRadius.circular(12),
          ),
          child: const Text(
            'atau',
            style: TextStyle(
                color: Colors.white,
                fontSize: 12,
                fontWeight: FontWeight.w500),
          ),
        ),
        Expanded(child: Divider(color: Colors.grey[300])),
      ],
    );
  }

  Widget _buildSocialRow() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        _socialButton(Icons.g_mobiledata, 'Google'),
        const SizedBox(width: 16),
        _socialButton(Icons.apple, 'Apple'),
        const SizedBox(width: 16),
        _socialButton(Icons.facebook, 'Facebook'),
      ],
    );
  }

  Widget _socialButton(IconData icon, String label) {
    return Semantics(
      label: 'Login dengan $label',
      button: true,
      child: Container(
        width: 48,
        height: 48,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          border: Border.all(color: Colors.grey[300]!),
          color: Colors.white,
        ),
        child: IconButton(
          onPressed: _isLoading ? null : () {},
          icon: Icon(icon, color: const Color(0xFF333333)),
          tooltip: label,
        ),
      ),
    );
  }
}
