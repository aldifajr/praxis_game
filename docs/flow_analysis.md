# Praxis Game — User Flow Analysis

## Phase 1: Authentication & Onboarding

```
[Welcome Screen] → [Login] → [Verify OTP] → [Home Page]
     (Splash)       (Auth)      (Security)     (Dashboard)
```

| Screen | Purpose | Next |
|--------|---------|------|
| **Welcome Screen** | Brand splash, loading state | Auto → Login |
| **Login** | Enter phone/email + social auth | → Verify OTP |
| **Verify OTP** | 6-digit code verification | → Home Page |
| **Home Page** | Main dashboard, "MULAI" CTA | → Start / Join Room |

---

## Phase 2: Game Session Setup

```
[Home Page] → [Start] → [Join Room] ←→ [Create Room]
                 ↑           ↓                ↓
                 └──── [Loading game] ← [Prepare Lobby]
```

| Screen | Purpose | Next |
|--------|---------|------|
| **Start** | Game mode selection (join vs create) | → Join Room or Create Room |
| **Join Room** | Quick start or enter private code | → Join Room Prepare (loading) |
| **Join Room Prepare** | "Persiapan Ruangan" — waiting/loading state | → Loading game |
| **Create Room** | Configure room, get code "ASDFG" | → Create Room Prepare (lobby) |
| **Create Room Prepare** | Lobby: invite friends, wait for players | → Loading game |
| **Loading game** | Splash while game initializes | → Board Game |

---

## Phase 3: In-Game Flow

```
[Loading game] → [Board Game] → [Show All Menu] → [Store / Assets / etc.]
                     ↑                              ↓
                     └──── [Game Over / Leaderboard] ← [Timeline Events]
```

| Screen | Purpose | Triggers |
|--------|---------|----------|
| **Board Game** | Main gameplay board, dice roll, move tokens | Player turn |
| **Board Game v2** | Same board with expanded UI (cards, stocks, chat) | Evolution of v1 |
| **Show All Menu** | Overlay menu with all game options | Menu button |
| **Show All Menu v2** | Updated menu design | Design refresh |
| **Show All Menu v2-1** | Minimalist board-only view (no UI chrome) | Clean view mode |

---

## Phase 4: Social & Meta Features

```
[Board Game] → [Leaderboard] → [Friends] → [Invitation] → [Join Request]
     ↓              ↓              ↓            ↓              ↓
[Home Page Setting] [Global Rank]  [Friend List] [Accept/Decline] [Accept/Decline]
```

| Screen | Purpose | Flow |
|--------|---------|------|
| **Leaderboard Server-1** | Empty state — no rank yet | Play games to earn rank |
| **Leaderboard Server** | Filled state — ranked players, money display | Share to social |
| **Leaderboard Global** | Worldwide rankings | Server dropdown |
| **Invitation** | Pop-up: "Desita invites you to Game Board" | Accept → Join Room Prepare |
| **Join Request** | Pop-up: "Olivia requests to join" | Accept/Reject as host |
| **Home Page Setting** | Audio, language, currency, data sharing | Accessible from Home Page |

---

## Phase 5: Event Cards (Game Mechanics)

When landing on board tiles, players trigger event cards:

```
[Board Game] → [Event Card] → [Decision Tree] → [Outcome]
```

### Event Categories:

| Category | Example Events |
|----------|---------------|
| **Life Events** | Married, New Born, School, University, Sick |
| **Financial Events** | Income Tax, Pay Day, Year End Bonus, THR, Vacation |
| **Crisis Events** | Stroke, Accident, Kidney Failure, Scammed, Parent Hospitalized |
| **Property Events** | Property Damage, Property Maintenance, Have no Property |
| **Career Events** | Get a Job, Fired, Increase Salary, Still Unemployed |
| **Market Events** | Business Cycle (Boom/Recovery), Financial Market |
| **Charity Events** | Donate to Charity, Amalan PopUp |
| **Legacy Events** | Inheritance (Warisan) |

### Decision Tree Pattern:

```
[Event Trigger] → [COH — Cash on Hand check]
                       ↓
              [Has enough?] — Yes → [Pay from COH]
                       ↓ No
              [Saving?] — Yes → [Pay from Saving]
                       ↓ No
              [Loan?] — Yes → [Loan Product Choose]
                       ↓ No
              [Insurance?] — Yes → [Asuransi Platinum covers it]
                       ↓ No
              [Negative Outcome — Have no Income / Property]
```

---

## Phase 6: User Profile & History

```
[Home Page] → [User Profile] → [Personal Data] → [Edit Profile] → [Change Photo]
     ↓              ↓                ↓
[Game History] [History Detail] [History Empty State]
```

| Screen | Purpose |
|--------|---------|
| **User Profile Personal Data** | View profile info |
| **User Profile Personal Data Edit** | Edit profile fields |
| **User Profile Change Photo** | Upload new avatar |
| **User Profile Game Play History** | List of past games |
| **User Profile Game Play History Detail** | Specific game stats |
| **User Profile Game Play History Empty** | No games played yet |

---

## Phase 7: Store & Assets

```
[Board Game] → [Store] → [Category] → [Product] → [Confirm Purchase]
     ↓            ↓          ↓            ↓              ↓
[IOU]        [Saving]   [Insurance]  [Retirement]   [Payment Method]
[Bill]       [Utang]    [Property]   [Vehicle Ins]  [COH/Saving/Loan]
```

| Store Category | Products |
|---------------|----------|
| **Saving** | BNI Taplus Muda, BNI Platinum |
| **Insurance** | Health Insurance (Chubb), Vehicle Insurance (Chubb) |
| **Retirement** | Retirement plans |
| **Property** | Apartment, Cluster, Perumahan |
| **Utang / IOU** | Loan products |

### Store Notification Flow:

```
[Select Product] → [Store Notif — Confirm] → [Payment Method] → [Success/Failure]
     ↓                    ↓
[Can't Afford] → [Store Notif — Can't] (negative)
[Insurance Claim] → [Insurance Notif — Ask question using saving] → [Confirm/Negative]
```

---

## Complete Flow Diagram (Text)

```
┌─────────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Welcome Screen │────▶│    Login    │────▶│  Verify OTP │────▶│  Home Page  │
│   (Splash)      │     │  (Auth)     │     │ (Security)  │     │ (Dashboard) │
└─────────────────┘     └─────────────┘     └─────────────┘     └──────┬──────┘
                                                                        │
                    ┌─────────────────────────────────────────────────────┘
                    │
                    ▼
            ┌───────────────┐
            │     Start     │
            │ (Mode Select) │
            └───────┬───────┘
                    │
        ┌───────────┴───────────┐
        │                       │
        ▼                       ▼
┌───────────────┐       ┌───────────────┐
│   Join Room   │       │  Create Room  │
│ (Quick/Code)  │       │ (Configure)   │
└───────┬───────┘       └───────┬───────┘
        │                       │
        ▼                       ▼
┌───────────────┐       ┌───────────────┐
│ Join Prepare  │       │Create Prepare │
│ (Loading)     │       │ (Lobby/Invite)│
└───────┬───────┘       └───────┬───────┘
        │                       │
        └───────────┬───────────┘
                    │
                    ▼
            ┌───────────────┐
            │  Loading Game │
            │  (Initialize) │
            └───────┬───────┘
                    │
                    ▼
            ┌───────────────┐
            │  Board Game   │◄────────────────────────────────────┐
            │  (Main Play)  │                                     │
            └───────┬───────┘                                     │
                    │                                             │
        ┌───────────┼───────────┐                               │
        │           │           │                               │
        ▼           ▼           ▼                               │
┌───────────┐ ┌───────────┐ ┌───────────┐                       │
│   Menu    │ │  Leader-  │ │  Profile  │                       │
│ (Show All)│ │   board   │ │  /Settings│                       │
└─────┬─────┘ └─────┬─────┘ └─────┬─────┘                       │
      │             │             │                             │
      ▼             ▼             ▼                             │
┌───────────┐ ┌───────────┐ ┌───────────┐                       │
│  Store    │ │  Server   │ │  Personal │                       │
│  Assets   │ │  /Global  │ │  Data/History                   │
└─────┬─────┘ └───────────┘ └───────────┘                       │
      │                                                         │
      ▼                                                         │
┌───────────┐                                                  │
│  Event    │                                                  │
│  Cards    │                                                  │
│ (Crisis/  │                                                  │
│  Life/etc)│                                                  │
└─────┬─────┘                                                  │
      │                                                        │
      └────────────────────────────────────────────────────────┘
                    (Back to Board Game for next turn)
```

---

## Issues Created Summary

| # | Issue | Flow Phase |
|---|-------|-----------|
| 1 | Verify OTP | Auth |
| 2 | Welcome Screen | Onboarding |
| 3 | Start _ Join room | Session Setup |
| 4 | Start _ Create room _ Prepare-1 | Session Setup |
| 5 | Start _ Create room _ Prepare | Session Setup |
| 6 | Start _ Join room _ Prepare .... | Session Setup |
| 7 | Loading game | Session Setup |
| 8 | Leaderboad _ Server-1 | Social (Empty) |
| 9 | Leaderboad _ Server | Social (Filled) |
| 10 | Join Request | Social |
| 11 | Invitation | Social |
| 12 | Home Page Setting | Settings |
| 13 | Board game _ show all menu | In-Game |
| 14 | Board game _ show all menu v2 | In-Game |

---

## Key Insights

1. **Financial Literacy Gamification**: The entire app is a "Game of Life" / Monopoly-style board game teaching Indonesian users about money management, insurance, taxes, savings, loans, and retirement.

2. **COH Decision Tree**: Every event follows a Cash-on-Hand → Saving → Loan → Insurance hierarchy. This teaches financial prioritization.

3. **Amalan Integration**: The app partners with "amalan" (Islamic charity/fintech) and "cekaja.com" (financial comparison), suggesting real-world financial product integration.

4. **Multiplayer First**: The "Join Room" / "Create Room" flow is central — this is designed for classroom, group, or competitive play.

5. **Server-based Leaderboards**: Players compete within servers (like "Amalan") and globally, with rankings based on money accumulated.

6. **Timeline Progression**: The "Lini Masa" (Timeline) tracks life stages — players progress through life events from start to retirement.
