export interface Winner {
  number: string,
  "payHash": string,
  "metamaskId": string,
  "transactionHash": string,
}

export interface WinnerGame {
  created: string,
  winners: Winner[],
}
