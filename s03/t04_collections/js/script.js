class GuestList {
        guestList = new WeakSet();

        add(guest) {
                this.guestList.add(guest);
        }

        removeGuest(guest) {
                this.guestList.delete(guest);
        }

        isInvited(guest) {
                return this.guestList.has(guest);
        }


}

class Menu {
        menu = new Map();

        addDish(name, price) {
                if (!this.menu.has(name))
                        this.menu.set(name, price);
        }

        everyDishes() {
                this.menu.forEach((value, key) => console.log(`${key}, \$${value}`));
        }
}

class BankVault {
        vault = new WeakMap();

        add(key, box) {
                this.vault.set(key, box);
        }

        isCorrect(key) {
                return this.vault.has(key);
        }

        del(key) {
                this.vault.delete(key);
        }
}

class Coins {
        coins = new Set();

        add(name) {
                this.coins.add(name);
        }

        seeCoins() {
                let res = '';
                this.coins.forEach(value => res += value + ' ');
                console.log(`Coins collection: ${res}`);
        }
}

//test


const guestList = new GuestList();
let nick = { name: 'Nick' },
    dmytr = { name: 'Dmytriy' }

guestList.add(nick);
guestList.add(dmytr);
guestList.add(dmytr);
console.log(guestList.isInvited("nick"));
guestList.removeGuest(dmytr);
console.log(guestList.guestList);

console.log(' ');

const menu = new Menu();
menu.add("Potato", 15);
menu.add("Meat", 22);
menu.everyDishes();

console.log(' ');

const bank = new BankVault();
let key1 = { credentials: '10rub' },
    key2 = { credentials: '25cop' }
bank.add(key1, 'value');
bank.add(key2, 'initial');
console.log(bank.vault);
console.log(bank.isCorrect(key1));
console.log(bank.isCorrect({ credentials: '11rub' }));
bank.remove(key2);
console.log(bank.vault);

console.log(' ');

const coins = new Coins();
coins.add("coin");
coins.add("kopiyka");
coins.seeCoins();
console.log(coins);
