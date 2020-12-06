export class DeviceToken{
    constructor(
        public DeviceId:string,
        public DeviceToken:string,
        public DeviceName:string
    ){}
    
}

export class EventSubscription{
    constructor(
        public EventId:number,
        public DeviceId:string
    ){}
}

export class ChapterSubscription{
    constructor(
        public ChapterId:number,
        public DeviceId:string
    ){}
}

export class Payment{
    constructor(
        public Amount:number,
        public Currency:string,
        public Description:string,
        public Intent:string,
        public DeviceId:string
    ){}
}

export class PaymentGet{
    constructor(
        public PaymentId,
        public Time:string,
        public Amount:number,
        public Currency:string,
        public Description:string,
        public Intent:string,
        public DeviceId:string
    ){}
}

export class PaymentResponseLog{
    constructor(
        public ClientEnvironment:string,
        public ClientProductName: string,
        public ClientPaypalSDKVersion:string,
        public ClientPlatform:string,
        public ResponseType:string,
        public ResponseId:string,
        public ResponseState: string,
        public ResponseCreatTime:string,
        public ResponseIntent:string,
        public PaymentId:number
    ){}
}

export class Feedback{
    constructor(
        public Message:string,
        public DeviceId:string,
        public FeedbackFor:string
    ){}
}