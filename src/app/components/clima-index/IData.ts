export interface IData {
    main : {
        temp: Number,
        pressure: Number,
        humidity: Number,
        temp_min: Number,
        temp_max: Number
    },
    clouds : {
        all : Number
    },
    name : String
}