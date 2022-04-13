// Actions types
export const FETCH_REQUESTED = "FETCH_REQUESTED";
export const FETCH_SUCCEDED = "FETCH_SUCCEDED";
export const FETCH_FAILED = "FETCH_FAILED";
export const LOADING_ON = "LOADING_ON";
export const LOADING_OFF = "LOADING_OFF";

// Interfaces
interface RequestIsReady {
  type: typeof FETCH_REQUESTED,
  payload: any
}

interface ReceiveIsReady {
  type: typeof FETCH_SUCCEDED,
  payload: any
}

interface ReceiveIsFailed {
  type: typeof FETCH_FAILED,
  payload: any
}

interface Loading {
  type: typeof LOADING_ON | typeof LOADING_OFF;
}

// Functions
export const requestIsReady = (payload: any): RequestIsReady => ({
  type: FETCH_REQUESTED,
  payload,
});

export const receiveIsReady = (payload: any): ReceiveIsReady => ({
  type: FETCH_SUCCEDED,
  payload,
});

export const receiveIsFailed = (payload: any): ReceiveIsFailed => ({
  type: FETCH_FAILED,
  payload,
});

export const loadingOn = (): Loading => ({
  type: LOADING_ON
});

export const loadingOff = (): Loading => ({
  type: LOADING_OFF
});

export type MainActions = RequestIsReady | ReceiveIsReady | ReceiveIsFailed | Loading;