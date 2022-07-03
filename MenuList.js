class Order {
    constructor(name,position){
        this.name=[];
        this.position=position;

 
    } 
    describe(){
        return `The order are ${this.name}`
    }
    viewList (){
        let orderItems ='';
        for (let i=0; i<this.name.length; i++) {
        orderItems +=i + ')' + this.name[i] + '\n';
        }
        alert (orderItems);
    }

    createList (){
        let position = prompt("Number if items you need to add to your Shopping List")
        for (let i=0;i<position;i++){
            let names= prompt("Enter order")
            this.name.push(names)
        }
    }

    deleteList (){
        let position = prompt("Item number to remove")
        this.name.splice(position,1)
    }
}

 class Menu extends Order {
     constructor(name,position){
         super(name,position)

     }

        start() {
            let selection = this.showMainMenuOptions();
             while (selection !=0){
                 switch (selection){
                     
                     case '1':
                         this.createList();
                         break;
                      case '2':
                          this.viewList();
                          break;
                      case '3':
                          this.deleteList();
                          break;
                    default :
                    selection=0;       
                 }
                 selection = this.showMainMenuOptions();
                }
                alert ('See you soon ')
            }
                 showMainMenuOptions()
                 {
                    return prompt(`
                    1) create new Shopping list
                    2) view List
                    3) delete item from my List
                    0) exit
                    `);
                    }
             }
        


     

 let menu= new Menu()
 menu.start();