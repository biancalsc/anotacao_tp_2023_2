class Z{
    tres():void{
        console.log("tres")
    }
}

class Y extends Z{
    dois():void{
        console.log("dois")
    }
}

class X extends Y{
    um():void{
        console.log("um")
    }
}

const z = new Z();
z.tres();