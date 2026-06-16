import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'screens/login_screen.dart';
import 'screens/home_screen.dart';

void main() {
  runApp(const PraxisApp());
}

class PraxisApp extends StatelessWidget {
  const PraxisApp({super.key});

  @override
  Widget build(BuildContext context) {
    final router = GoRouter(
      initialLocation: '/',
      routes: [
        GoRoute(
          path: '/',
          builder: (context, state) => const LoginScreen(),
        ),
        GoRoute(
          path: '/home',
          builder: (context, state) => const HomeScreen(),
        ),
      ],
    );

    return MaterialApp.router(
      title: 'Praxis Game',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFFFF1E39),
          primary: const Color(0xFFFF1E39),
          error: const Color(0xFFFF1E39),
        ),
        useMaterial3: true,
        inputDecorationTheme: const InputDecorationTheme(
          floatingLabelStyle: TextStyle(color: Color(0xFFFF1E39)),
        ),
        textSelectionTheme: const TextSelectionThemeData(
          cursorColor: Color(0xFFFF1E39),
          selectionHandleColor: Color(0xFFFF1E39),
        ),
        checkboxTheme: CheckboxThemeData(
          checkColor: MaterialStateProperty.all(Colors.white),
        ),
        snackBarTheme: const SnackBarThemeData(
          behavior: SnackBarBehavior.floating,
        ),
      ),
      routerConfig: router,
    );
  }
}
