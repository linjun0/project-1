/**
 * Created by Administrator on 2017/5/30 0030.
 */
//球队信息获取函数
function getTeamInfo(a,b,c,d){
    $.ajax({
        type:c,
        url:d,
        data:{lm:a,dir:b},
        success: function (data) {
            var html="";
            //联盟排名模式
            if(a==1){
                html+=`<tr class="tr">
                <td >排名</td>
                <td>姓名</td>
                <td>胜</td>
                <td>负</td>
                <td>胜场差</td>
                </tr>`
                for(var i=0;i<data.length;i++){
                    html+=`<tr class="tr">
                        <td>${i+1}</td>
                        <td class="sectab">${data[i][1]}</td>
                        <td>${data[i][4]}</td>
                        <td>${data[i][5]}</td>
                        <td>${data[0][4]-data[i][4]}</td>
                        </tr>`
                }
                $('#team-rank').html(html);
                $("#team-rank tr:nth-child(2n+1)").addClass('gray');
            }
            //分区排名模式
            if(a==0){
                for(var j=1;j<4;j++){
                    html+=`<tr><td colspan="5" style="background-color: #0F6DB4;color: white;height: 20px">${data[5*j-1][3]}</td></tr>`
                    html+=`<tr class="thead"><td>排名</td>
                    <td class="sectab">姓名</td>
                    <td>胜</td>
                    <td>负</td>
                    <td>胜场差</td></tr>`;
                    for(var i=5*(j-1),k=1;i<5*j;i++,k++){
                        html+=`<tr class="tr">
                        <td>${k}</td>
                        <td class="sectab">${data[i][1]}</td>
                        <td>${data[i][4]}</td>
                        <td>${data[i][5]}</td>
                        <td>${data[5*(j-1)][4]-data[i][4]}</td>
                        </tr>`
                    }
                }
                $('#team-rank').html(html);
                $("#team-rank tr:nth-child(2n+1)").addClass('gray');
            }
        }
    })
}
//轮播动画计时器函数
function timer(n){
    t=setInterval(function () {
        if(n>4)n=0;
        $('#ad').css('left',`${n*(-510)}px`);
        $(points[n]).addClass('current');
        $(points[n]).siblings().removeClass('current');
        n++;
    },3000);
}
//商品详情请求函数
function commodityInfo(n,m,o){
    if(!m) m=0;
    if(!o) o='ctime';
    $.ajax({
        type:'get',
        url:'data/listByPage.php',
        data:{num:n,start:m,order:o},
        success: function (data) {
            var html="";
            for(var i=0;i<data.length-1;i++){
                html+=`<div class="img-item">
                    <a href="cloth_details.html"><img class="img_size" src="${data[i][1]}" alt="pic"/></a>
                    <p class="img_express">${data[i][3]}</p>
                    <h4 class="img_price">¥${data[i][2]}&nbsp;&nbsp;<span>销量:${data[i][4]}件</span></h4>
                </div>`
            }
            $('.img-list').html(html);
            var pageHtml="";
            for(var j=1;j<=data[data.length-1];j++){
                pageHtml+=`<a class="page">${j}</a>`
            }
            $('#pageNumber').html(pageHtml);
            $($('#pageNumber>a')[m]).addClass('clicked');
        },
        err: function (err) {
            console.log(err)
        }
    })
}