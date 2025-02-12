//实现{p1:'12.23',p2:'13.34',...,p99:'34.23'}类型声明
type ResultField<Count extends number, Result extends string[] = []> = Result["length"] extends Count
  ? Result[number]
  : ResultField<Count, [...Result, `p${Result["length"]}`]>;
type GenerateObject<Count extends number> = {
  [key in ResultField<Count>]: string;
};
type Result = GenerateObject<99>;
