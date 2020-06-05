export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActiveToInactive(){
        this.activeToInactiveCounter ++;
        console.log('A to I ' + this.activeToInactiveCounter);
    }

    incrementInActiveToActive(){
        this.inactiveToActiveCounter ++;
        console.log('I to A ' + this.inactiveToActiveCounter)
    }
}