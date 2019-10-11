import React, { Component } from 'react';

class Prime extends Component {
    constructor(props){
        super(props);
        this.state = { primePairs: [] };
    }

    isPrime = num => {
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i == 0){
                return false;
            }
        }
        return true;
    }

    parseNum = () => {
        const num = parseInt(this.input.value);
        let primes = [];
        for(let i = 2; i <= num / 2; i++){
            let fact_1 = i;
            let fact_2 = num - i;
            if(this.isPrime(fact_1) && this.isPrime(fact_2)) {
                primes.push([fact_1, fact_2]);
            }
        }
        this.setState({primePairs: primes});
    }

    renderOutput = () => {
        const { primePairs } = this.state;
        return(
            <ol>
                { primePairs && primePairs.map((item, index) => <li key={index}>{item[0]} + {item[1]}</li>)}
            </ol>
        );
    }

    render(){
        return (
            <div>
                <div>
                    <label>需要分解的正整数：</label>
                    <input type='text' defaultValue='0' ref={input => this.input = input} />
                    <button onClick={this.parseNum}>分解</button>
                </div>
                <div>
                    {this.renderOutput()}
                </div>
            </div>
        );
    }
}

export default Prime;