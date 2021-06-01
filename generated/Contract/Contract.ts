// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AdminWithdrawal extends ethereum.Event {
  get params(): AdminWithdrawal__Params {
    return new AdminWithdrawal__Params(this);
  }
}

export class AdminWithdrawal__Params {
  _event: AdminWithdrawal;

  constructor(event: AdminWithdrawal) {
    this._event = event;
  }

  get admin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get totalGameInterest(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get adminFeeAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get player(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get segment(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class EarlyWithdrawal extends ethereum.Event {
  get params(): EarlyWithdrawal__Params {
    return new EarlyWithdrawal__Params(this);
  }
}

export class EarlyWithdrawal__Params {
  _event: EarlyWithdrawal;

  constructor(event: EarlyWithdrawal) {
    this._event = event;
  }

  get player(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get totalGamePrincipal(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class FundsDepositedIntoExternalPool extends ethereum.Event {
  get params(): FundsDepositedIntoExternalPool__Params {
    return new FundsDepositedIntoExternalPool__Params(this);
  }
}

export class FundsDepositedIntoExternalPool__Params {
  _event: FundsDepositedIntoExternalPool;

  constructor(event: FundsDepositedIntoExternalPool) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class FundsRedeemedFromExternalPool extends ethereum.Event {
  get params(): FundsRedeemedFromExternalPool__Params {
    return new FundsRedeemedFromExternalPool__Params(this);
  }
}

export class FundsRedeemedFromExternalPool__Params {
  _event: FundsRedeemedFromExternalPool;

  constructor(event: FundsRedeemedFromExternalPool) {
    this._event = event;
  }

  get totalAmount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get totalGamePrincipal(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get totalGameInterest(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get rewards(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class FundsRedeemedFromExternalPool1 extends ethereum.Event {
  get params(): FundsRedeemedFromExternalPool1__Params {
    return new FundsRedeemedFromExternalPool1__Params(this);
  }
}

export class FundsRedeemedFromExternalPool1__Params {
  _event: FundsRedeemedFromExternalPool1;

  constructor(event: FundsRedeemedFromExternalPool1) {
    this._event = event;
  }

  get totalAmount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get totalGamePrincipal(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get totalGameInterest(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class JoinedGame extends ethereum.Event {
  get params(): JoinedGame__Params {
    return new JoinedGame__Params(this);
  }
}

export class JoinedGame__Params {
  _event: JoinedGame;

  constructor(event: JoinedGame) {
    this._event = event;
  }

  get player(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class WinnersAnnouncement extends ethereum.Event {
  get params(): WinnersAnnouncement__Params {
    return new WinnersAnnouncement__Params(this);
  }
}

export class WinnersAnnouncement__Params {
  _event: WinnersAnnouncement;

  constructor(event: WinnersAnnouncement) {
    this._event = event;
  }

  get winners(): Array<Address> {
    return this._event.parameters[0].value.toAddressArray();
  }
}

export class Withdrawal extends ethereum.Event {
  get params(): Withdrawal__Params {
    return new Withdrawal__Params(this);
  }
}

export class Withdrawal__Params {
  _event: Withdrawal;

  constructor(event: Withdrawal) {
    this._event = event;
  }

  get player(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Contract__playersResult {
  value0: Address;
  value1: boolean;
  value2: boolean;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: Address,
    value1: boolean,
    value2: boolean,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    map.set("value2", ethereum.Value.fromBoolean(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  adaiToken(): Address {
    let result = super.call("adaiToken", "adaiToken():(address)", []);

    return result[0].toAddress();
  }

  try_adaiToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("adaiToken", "adaiToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  adminFeeAmount(): BigInt {
    let result = super.call("adminFeeAmount", "adminFeeAmount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_adminFeeAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "adminFeeAmount",
      "adminFeeAmount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  adminWithdraw(): boolean {
    let result = super.call("adminWithdraw", "adminWithdraw():(bool)", []);

    return result[0].toBoolean();
  }

  try_adminWithdraw(): ethereum.CallResult<boolean> {
    let result = super.tryCall("adminWithdraw", "adminWithdraw():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  customFee(): BigInt {
    let result = super.call("customFee", "customFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_customFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("customFee", "customFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  daiToken(): Address {
    let result = super.call("daiToken", "daiToken():(address)", []);

    return result[0].toAddress();
  }

  try_daiToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("daiToken", "daiToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  earlyWithdrawalFee(): BigInt {
    let result = super.call(
      "earlyWithdrawalFee",
      "earlyWithdrawalFee():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_earlyWithdrawalFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "earlyWithdrawalFee",
      "earlyWithdrawalFee():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  firstSegmentStart(): BigInt {
    let result = super.call(
      "firstSegmentStart",
      "firstSegmentStart():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_firstSegmentStart(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "firstSegmentStart",
      "firstSegmentStart():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getCurrentSegment(): BigInt {
    let result = super.call(
      "getCurrentSegment",
      "getCurrentSegment():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getCurrentSegment(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCurrentSegment",
      "getCurrentSegment():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getNumberOfPlayers(): BigInt {
    let result = super.call(
      "getNumberOfPlayers",
      "getNumberOfPlayers():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getNumberOfPlayers(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getNumberOfPlayers",
      "getNumberOfPlayers():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  incentiveController(): Address {
    let result = super.call(
      "incentiveController",
      "incentiveController():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_incentiveController(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "incentiveController",
      "incentiveController():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isGameCompleted(): boolean {
    let result = super.call("isGameCompleted", "isGameCompleted():(bool)", []);

    return result[0].toBoolean();
  }

  try_isGameCompleted(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isGameCompleted",
      "isGameCompleted():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  iterablePlayers(param0: BigInt): Address {
    let result = super.call(
      "iterablePlayers",
      "iterablePlayers(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_iterablePlayers(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "iterablePlayers",
      "iterablePlayers(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  lastSegment(): BigInt {
    let result = super.call("lastSegment", "lastSegment():(uint256)", []);

    return result[0].toBigInt();
  }

  try_lastSegment(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("lastSegment", "lastSegment():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lendingPool(): Address {
    let result = super.call("lendingPool", "lendingPool():(address)", []);

    return result[0].toAddress();
  }

  try_lendingPool(): ethereum.CallResult<Address> {
    let result = super.tryCall("lendingPool", "lendingPool():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  lendingPoolAddressProvider(): Address {
    let result = super.call(
      "lendingPoolAddressProvider",
      "lendingPoolAddressProvider():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_lendingPoolAddressProvider(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "lendingPoolAddressProvider",
      "lendingPoolAddressProvider():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  matic(): Address {
    let result = super.call("matic", "matic():(address)", []);

    return result[0].toAddress();
  }

  try_matic(): ethereum.CallResult<Address> {
    let result = super.tryCall("matic", "matic():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  merkleRoot(): Bytes {
    let result = super.call("merkleRoot", "merkleRoot():(bytes32)", []);

    return result[0].toBytes();
  }

  try_merkleRoot(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("merkleRoot", "merkleRoot():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  players(param0: Address): Contract__playersResult {
    let result = super.call(
      "players",
      "players(address):(address,bool,bool,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new Contract__playersResult(
      result[0].toAddress(),
      result[1].toBoolean(),
      result[2].toBoolean(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_players(param0: Address): ethereum.CallResult<Contract__playersResult> {
    let result = super.tryCall(
      "players",
      "players(address):(address,bool,bool,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__playersResult(
        value[0].toAddress(),
        value[1].toBoolean(),
        value[2].toBoolean(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  redeemed(): boolean {
    let result = super.call("redeemed", "redeemed():(bool)", []);

    return result[0].toBoolean();
  }

  try_redeemed(): ethereum.CallResult<boolean> {
    let result = super.tryCall("redeemed", "redeemed():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  rewardsPerPlayer(): BigInt {
    let result = super.call(
      "rewardsPerPlayer",
      "rewardsPerPlayer():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_rewardsPerPlayer(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "rewardsPerPlayer",
      "rewardsPerPlayer():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  segmentDeposit(param0: BigInt): BigInt {
    let result = super.call(
      "segmentDeposit",
      "segmentDeposit(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_segmentDeposit(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "segmentDeposit",
      "segmentDeposit(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  segmentLength(): BigInt {
    let result = super.call("segmentLength", "segmentLength():(uint256)", []);

    return result[0].toBigInt();
  }

  try_segmentLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "segmentLength",
      "segmentLength():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  segmentPayment(): BigInt {
    let result = super.call("segmentPayment", "segmentPayment():(uint256)", []);

    return result[0].toBigInt();
  }

  try_segmentPayment(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "segmentPayment",
      "segmentPayment():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalGameInterest(): BigInt {
    let result = super.call(
      "totalGameInterest",
      "totalGameInterest():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalGameInterest(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalGameInterest",
      "totalGameInterest():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalGamePrincipal(): BigInt {
    let result = super.call(
      "totalGamePrincipal",
      "totalGamePrincipal():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalGamePrincipal(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalGamePrincipal",
      "totalGamePrincipal():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  winners(param0: BigInt): Address {
    let result = super.call("winners", "winners(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_winners(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("winners", "winners(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _inboundCurrency(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _lendingPoolAddressProvider(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _segmentCount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _segmentLength(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _segmentPayment(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _earlyWithdrawalFee(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _customFee(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _dataProvider(): Address {
    return this._call.inputValues[7].value.toAddress();
  }

  get merkleRoot_(): Bytes {
    return this._call.inputValues[8].value.toBytes();
  }

  get _incentiveController(): Address {
    return this._call.inputValues[9].value.toAddress();
  }

  get _matic(): Address {
    return this._call.inputValues[10].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DepositIntoExternalPoolCall extends ethereum.Call {
  get inputs(): DepositIntoExternalPoolCall__Inputs {
    return new DepositIntoExternalPoolCall__Inputs(this);
  }

  get outputs(): DepositIntoExternalPoolCall__Outputs {
    return new DepositIntoExternalPoolCall__Outputs(this);
  }
}

export class DepositIntoExternalPoolCall__Inputs {
  _call: DepositIntoExternalPoolCall;

  constructor(call: DepositIntoExternalPoolCall) {
    this._call = call;
  }
}

export class DepositIntoExternalPoolCall__Outputs {
  _call: DepositIntoExternalPoolCall;

  constructor(call: DepositIntoExternalPoolCall) {
    this._call = call;
  }
}

export class EarlyWithdrawCall extends ethereum.Call {
  get inputs(): EarlyWithdrawCall__Inputs {
    return new EarlyWithdrawCall__Inputs(this);
  }

  get outputs(): EarlyWithdrawCall__Outputs {
    return new EarlyWithdrawCall__Outputs(this);
  }
}

export class EarlyWithdrawCall__Inputs {
  _call: EarlyWithdrawCall;

  constructor(call: EarlyWithdrawCall) {
    this._call = call;
  }
}

export class EarlyWithdrawCall__Outputs {
  _call: EarlyWithdrawCall;

  constructor(call: EarlyWithdrawCall) {
    this._call = call;
  }
}

export class JoinGameCall extends ethereum.Call {
  get inputs(): JoinGameCall__Inputs {
    return new JoinGameCall__Inputs(this);
  }

  get outputs(): JoinGameCall__Outputs {
    return new JoinGameCall__Outputs(this);
  }
}

export class JoinGameCall__Inputs {
  _call: JoinGameCall;

  constructor(call: JoinGameCall) {
    this._call = call;
  }

  get index(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get merkleProof(): Array<Bytes> {
    return this._call.inputValues[1].value.toBytesArray();
  }
}

export class JoinGameCall__Outputs {
  _call: JoinGameCall;

  constructor(call: JoinGameCall) {
    this._call = call;
  }
}

export class MakeDepositCall extends ethereum.Call {
  get inputs(): MakeDepositCall__Inputs {
    return new MakeDepositCall__Inputs(this);
  }

  get outputs(): MakeDepositCall__Outputs {
    return new MakeDepositCall__Outputs(this);
  }
}

export class MakeDepositCall__Inputs {
  _call: MakeDepositCall;

  constructor(call: MakeDepositCall) {
    this._call = call;
  }
}

export class MakeDepositCall__Outputs {
  _call: MakeDepositCall;

  constructor(call: MakeDepositCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class AdminFeeWithdrawCall extends ethereum.Call {
  get inputs(): AdminFeeWithdrawCall__Inputs {
    return new AdminFeeWithdrawCall__Inputs(this);
  }

  get outputs(): AdminFeeWithdrawCall__Outputs {
    return new AdminFeeWithdrawCall__Outputs(this);
  }
}

export class AdminFeeWithdrawCall__Inputs {
  _call: AdminFeeWithdrawCall;

  constructor(call: AdminFeeWithdrawCall) {
    this._call = call;
  }
}

export class AdminFeeWithdrawCall__Outputs {
  _call: AdminFeeWithdrawCall;

  constructor(call: AdminFeeWithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class RedeemFromExternalPoolCall extends ethereum.Call {
  get inputs(): RedeemFromExternalPoolCall__Inputs {
    return new RedeemFromExternalPoolCall__Inputs(this);
  }

  get outputs(): RedeemFromExternalPoolCall__Outputs {
    return new RedeemFromExternalPoolCall__Outputs(this);
  }
}

export class RedeemFromExternalPoolCall__Inputs {
  _call: RedeemFromExternalPoolCall;

  constructor(call: RedeemFromExternalPoolCall) {
    this._call = call;
  }
}

export class RedeemFromExternalPoolCall__Outputs {
  _call: RedeemFromExternalPoolCall;

  constructor(call: RedeemFromExternalPoolCall) {
    this._call = call;
  }
}
