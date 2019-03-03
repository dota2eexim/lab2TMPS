class Android {
    constructor(builder) {
        this.name = builder.name;
        this.sex = builder.sex || 'male';
        this.eyeColor = builder.eyeColor;
        this.skinColor = builder.skinColor;
        this.weight = builder.weight || 45
        this.speed = builder.speed || 15
    }

    showCharacter(android) {
        return console.log(JSON.stringify(android));
    }

    getWeight() {
        return this.weight;
    }
}

//Facade

const AndroidServices = (
    () => {
        return{
            changeSkinColor: (Android) => {
                Android.skinColor = 'violet';
                console.log(Android.name + ' skin color changing...');
            },
            save: (Android) => {
                console.log('New skin color saved');
            }
        }
    }
)();

const AndroidServicesFacade = (
    (Android) => {
        const Changed = (Android) => {
            AndroidServices.changeSkinColor(Android);
            if(Android.skinColor != 'white') {
                AndroidServices.save(Android);
            }
        }

        return {
            ChangeMethod: Changed
        }
    }
)();

module.exports = {Android, AndroidServices, AndroidServicesFacade};