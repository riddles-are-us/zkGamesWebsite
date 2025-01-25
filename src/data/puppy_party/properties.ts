import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export enum UIState {
  Init,
  LoadingSanity,
  Preloading,
  QueryConfig,
  WelcomePage,
  QueryState,
  CreatePlayer,
  ConnectionError,
  Idle, // from this point we have prepared all info for the main game stage
  QueryWithdraw,
  WithdrawPopup,
  QueryDeposit,
  DepositPopup,
  QueryGiftbox,
  GiftboxPopup,
  SponsorPopup,
  LotteryHeatPopup,
  QueryUploadMeme,
  UploadMemePopup,
  QueryLotteryHeat,
  ConfirmPopup,
  ErrorPopup,
}

interface PlayerState {
  nonce: number;
  data: {
    balance: number;
    ticket: number;
    lottery_info: number;
    action: bigint;
    last_lottery_timestamp: number;
    last_action_timestamp: number;
    progress: number;
  };
}

interface PropertiesState {
  uIState: UIState;
  player: PlayerState;
  lastTxResult: string | number;
  globalTimer: number;
  targetMemeIndex: number;
  giftboxShake: boolean;
  progressReset: boolean;
  popupDescription: string;
  showProgressBarGoodJob: boolean;
  showProgressBarNice: boolean;
  lotteryInfoDiff: number;
}

const SWAY = 0n;

const initialState: PropertiesState = {
  uIState: UIState.Init,
  player: {
    nonce: 0,
    data: {
      balance: 0,
      lottery_info: 0,
      ticket: 0,
      action: SWAY,
      last_lottery_timestamp: 0,
      last_action_timestamp: 0,
      progress: 0,
    },
  },
  lastTxResult: "",
  globalTimer: 0,
  targetMemeIndex: 0,
  giftboxShake: false,
  progressReset: false,
  popupDescription: "",
  showProgressBarGoodJob: false,
  showProgressBarNice: false,
  lotteryInfoDiff: 0,
};

export const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    setTargetMemeIndex: (state, action) => {
      state.targetMemeIndex = action.payload;
    },
    setUIState: (state, action) => {
      state.uIState = action.payload.uIState;
    },
    setLastTxResult: (state, action) => {
      state.lastTxResult = action.payload.lastTxResult;
    },
    setGiftboxShake: (state, action) => {
      state.giftboxShake = action.payload.giftboxShake;
    },
    setProgressReset: (state, action) => {
      state.progressReset = action.payload.progressReset;
    },
    setPopupDescription: (state, action) => {
      state.popupDescription = action.payload.popupDescription;
    },
    setShowProgressBarGoodJob: (state, action) => {
      state.showProgressBarGoodJob = action.payload.showProgressBarGoodJob;
    },
    setShowProgressBarNice: (state, action) => {
      state.showProgressBarNice = action.payload.showProgressBarNice;
    },
    resetLotteryInfoDiff: (state, action) => {
      state.lotteryInfoDiff = 0;
    },
  },
});

export const selectUIState = (state: RootState) =>
  state.puppyParty.properties.uIState;
export const selectGlobalTimer = (state: RootState) =>
  state.puppyParty.properties.globalTimer;
export const selectNonce = (state: RootState) =>
  BigInt(state.puppyParty.properties.player.nonce);
export const selectBalance = (state: RootState) =>
  state.puppyParty.properties.player.data.balance;
export const selectTicket = (state: RootState) =>
  state.puppyParty.properties.player.data.ticket ?? 0;
export const selectLotteryInfo = (state: RootState) =>
  state.puppyParty.properties.player.data.lottery_info;
export const selectLotteryInfoDiff = (state: RootState) =>
  state.puppyParty.properties.lotteryInfoDiff;
export const selectAction = (state: RootState) =>
  state.puppyParty.properties.player.data.action;
export const selectLastLotteryTimestamp = (state: RootState) =>
  state.puppyParty.properties.player.data.last_lottery_timestamp;
export const selectLastActionTimestamp = (state: RootState) =>
  state.puppyParty.properties.player.data.last_action_timestamp;
export const selectProgress = (state: RootState) =>
  state.puppyParty.properties.player.data.progress;
export const selectLastTxResult = (state: RootState) =>
  state.puppyParty.properties.lastTxResult;
export const selectTargetMemeIndex = (state: RootState) =>
  state.puppyParty.properties.targetMemeIndex;
export const selectGiftboxShake = (state: RootState) =>
  state.puppyParty.properties.giftboxShake;
export const selectProgressReset = (state: RootState) =>
  state.puppyParty.properties.progressReset;
export const selectPopupDescription = (state: RootState) =>
  state.puppyParty.properties.popupDescription;
export const selectShowProgressBarGoodJob = (state: RootState) =>
  state.puppyParty.properties.showProgressBarGoodJob;
export const selectShowProgressBarNice = (state: RootState) =>
  state.puppyParty.properties.showProgressBarNice;

export const {
  setTargetMemeIndex,
  setUIState,
  setLastTxResult,
  setGiftboxShake,
  setProgressReset,
  setPopupDescription,
  setShowProgressBarGoodJob,
  setShowProgressBarNice,
  resetLotteryInfoDiff,
} = propertiesSlice.actions;
export default propertiesSlice.reducer;
