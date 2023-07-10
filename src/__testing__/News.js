import React , {Component} from "react";
import axios from 'axios'

class News extends Component {
    constructor(props){
        super(props)
        this.state = {
            newscount:0
        }
    }

    componentDidMount() {
        this.func(90,80)
    }
    func = async(no1,no2) => {
        let url = 'https://jsonplaceholder.typicode.com/users';
        let options =  {
            method : 'GET',
            url:url,
        }
        let response = await axios(options)
        return response.data;
    }
    signOut(){
        this.func(90,80)
    }
    checkBoxChecked(list,test){
        return{
            id:3
        }
    }
    loadData(id,test){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                this.setState({
                    newscount:50
                })
                resolve({me:12})
            },2000)
        });
    }
    render() {
        return(
            <div>
                Hello
                <button onClick={() => this.signOut()}>
                    Sign Out
                    <input type="text" id="firstname" value="codeImprove" name="firstname"/>
                </button>
            </div>
        )
    }
}
export default News

