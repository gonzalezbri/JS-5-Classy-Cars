class Vehicle {
    constructor(model){
    this.model = model
    }
    drive(){
    return this.model + " " + "drives"
    }
}
class Sedan extends Vehicle{
    constructor(backupCamera,model){
        super(model)
        this.model = model
    this.backupCamera = backupCamera
}
}
class Suv extends Vehicle{
    constructor(offroadPackage,model){
        super(model)
        this.model = model
        this.offroadPackage = offroadPackage
    }
}
class Truck extends Vehicle{
    constructor(towingCapacity,model){
        super(model)
        this.model = model
        this.towingCapacity = towingCapacity
    }
}
class evSedan extends Sedan{
    constructor(model,backupCamera){
        super(model,backupCamera)
        this.backupCamera = backupCamera
        this.model = model
    }
    recharge(){
        return this.model + " " + "recharges"
    }
}