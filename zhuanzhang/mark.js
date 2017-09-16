Vue.component("markModule",{
    data:function(){
        return{
            index:NaN,
            mark_list:[]
        }
    },
    template:`
        <section>
            <div class="mark"></div>
            <div class="alert">
                <div class="title">
                    转账记录
                </div>
                <div class="alert-list">
                    <ul>
                        <li v-for="(item,i) in mark_list" @click="select(i)" :class="{change:index==i}">
                            <span>{{item.name}}</span>
                            <b>{{item.number}}</b>
                        </li>
                    </ul>
                </div>
                <div class="footer">
                    <button class="cancel">取消</button>
                    <button class="sure">确定</button>
                </div>
            </div>
        </section>
    `,
    methods:{
        select:function(i){
            this.index=i;
        }
    },
    beforeCreate(){
        this.$http.get("./service/data.json").then((object)=>{
            this.mark_list=object.data;
        })
    }
})