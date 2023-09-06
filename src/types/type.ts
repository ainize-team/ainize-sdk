export type setDefaultFlag = {
  triggerFuncton: boolean,
  billingConfig: boolean,
};

// NOTE(yoojin): pls suggest good name.
export type triggerFunctionConfig = {
  function_type: string,
  function_url: string,
  function_id: string,
};

export type setTriggerFunctionParm = {
  ref: string
} & triggerFunctionConfig;

export type writeRuleConfig = {
  write: string,
};

export type setRuleParam = {
  ref: string
} & writeRuleConfig;

export type billingConfig = {
  depositAddress: string,
  tokenPerCost: number,
  minCost?: number,
  maxCost?: number,
  responseTimeout?: number,
};

export enum HISTORY_TYPE {
  DEPOSIT = "DEPOSIT",
  USAGE = "USAGE",
}

export type txResult = {
  gas_amount_total: object;
  gas_cost_total: number;
  code?: number;
  result_list?: {
    [index: string]: {
      code: number;
      bandwidth_gas_amount: number;
    };
  };
};