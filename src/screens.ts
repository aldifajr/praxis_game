import type { ComponentType } from 'react';
import WelcomeScreen from './pages/WelcomeScreen';
import CreateRoomPrepareEmpty from './pages/CreateRoomPrepareEmpty';
import CreateRoomPreparePage from './pages/CreateRoomPreparePage';
import JoinRoomPreparePage from './pages/JoinRoomPreparePage';
import LoadingGamePage from './pages/LoadingGamePage';
import LeaderboardServerEmptyPage from './pages/LeaderboardServerEmptyPage';
import LeaderboardServerPage from './pages/LeaderboardServerPage';
import JoinRequestPage from './pages/JoinRequestPage';
import HomePageSetting from './pages/HomePageSetting';
import BoardGameMenuV2 from './pages/BoardGameMenuV2';
import VerifyOtpPage from './pages/VerifyOtpPage';
import StartJoinRoomPage from './pages/StartJoinRoomPage';
import InvitationPage from './pages/InvitationPage';
import BoardGameMenuPage from './pages/BoardGameMenuPage';

export type ScreenDefinition = {
  path: string;
  title: string;
  issue: number;
  asset: string;
  artboard: string;
  phase: string;
  /** Implemented screen component. When omitted, a metadata placeholder renders. */
  component?: ComponentType;
};

/**
 * Single source of truth for the screen catalogue. App.tsx maps over this to
 * build both the dev "queue" home page and the routes — adding a screen means
 * adding one entry here (and its component), nothing else.
 */
export const screens: ScreenDefinition[] = [
  {
    path: '/verify-otp',
    title: 'Verify OTP',
    issue: 1,
    asset: 'assets/images/Verify OTP.svg',
    artboard: '812x375',
    phase: 'Authentication',
    component: VerifyOtpPage,
  },
  {
    path: '/welcome',
    title: 'Welcome Screen',
    issue: 2,
    asset: 'assets/images/Welcome Screen.svg',
    artboard: '812x375',
    phase: 'Onboarding',
    component: WelcomeScreen,
  },
  {
    path: '/start/join-room',
    title: 'Start / Join Room',
    issue: 3,
    asset: 'assets/images/Start _ Join room.svg',
    artboard: '611x284',
    phase: 'Session Setup',
    component: StartJoinRoomPage,
  },
  {
    path: '/start/create-room/prepare-empty',
    title: 'Create Room Prepare — Empty',
    issue: 4,
    asset: 'assets/images/Start _ Create room _ Prepare-1.svg',
    artboard: '611x288',
    phase: 'Session Setup',
    component: CreateRoomPrepareEmpty,
  },
  {
    path: '/start/create-room/prepare',
    title: 'Create Room Prepare',
    issue: 5,
    asset: 'assets/images/Start _ Create room _ Prepare.svg',
    artboard: '611x288',
    phase: 'Session Setup',
    component: CreateRoomPreparePage,
  },
  {
    path: '/start/join-room/prepare',
    title: 'Join Room Prepare',
    issue: 6,
    asset: 'assets/images/Start _ Join room _ Prepare ....svg',
    artboard: '216x172',
    phase: 'Session Setup',
    component: JoinRoomPreparePage,
  },
  {
    path: '/loading-game',
    title: 'Loading Game',
    issue: 7,
    asset: 'assets/images/Loading game.svg',
    artboard: '812x375',
    phase: 'Session Setup',
    component: LoadingGamePage,
  },
  {
    path: '/leaderboard/server-empty',
    title: 'Leaderboard Server Empty State',
    issue: 8,
    asset: 'assets/images/Leaderboad _ Server-1.svg',
    artboard: '508x312',
    phase: 'Social',
    component: LeaderboardServerEmptyPage,
  },
  {
    path: '/leaderboard/server',
    title: 'Leaderboard Server',
    issue: 9,
    asset: 'assets/images/Leaderboad _ Server.svg',
    artboard: '508x312',
    phase: 'Social',
    component: LeaderboardServerPage,
  },
  {
    path: '/join-request',
    title: 'Join Request',
    issue: 10,
    asset: 'assets/images/Join Request.svg',
    artboard: '216x232',
    phase: 'Social',
    component: JoinRequestPage,
  },
  {
    path: '/invitation',
    title: 'Invitation',
    issue: 11,
    asset: 'assets/images/Invitation.svg',
    artboard: '216x248',
    phase: 'Social',
    component: InvitationPage,
  },
  {
    path: '/home/settings',
    title: 'Home Page Settings',
    issue: 12,
    asset: 'assets/images/Home Page Setting.svg',
    artboard: '392x256',
    phase: 'Settings',
    component: HomePageSetting,
  },
  {
    path: '/board-game/menu',
    title: 'Board Game Show All Menu',
    issue: 13,
    asset: 'assets/images/Board game _ show all menu.svg',
    artboard: '812x375',
    phase: 'In-Game',
    component: BoardGameMenuPage,
  },
  {
    path: '/board-game/menu-v2',
    title: 'Board Game Show All Menu v2',
    issue: 14,
    asset: 'assets/images/Board game _ show all menu v2.svg',
    artboard: '812x375',
    phase: 'In-Game',
    component: BoardGameMenuV2,
  },
];
