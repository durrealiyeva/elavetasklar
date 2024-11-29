const companies = [
    {name:'Whelp' , category:'Development' , start:2002 , end:2021},
    {name:'ByQr' , category:'Finance' , start:1998 , end:2023},
    {name:'Marandi' , category:'Design' , start:2012 , end:2022},
    {name:'Kapital' , category:'Technology' , start:1992 , end:2015},
    {name:'Pasha' , category:'Retail' , start:1999 , end:2005},
    {name:'Rabite' , category:'Finance' , start:2006 , end:2009},
    {name:'Irshad' , category:'Development' , start:2004 , end:2021},
    {name:'AzGranata' , category:'Design' , start:1993 , end:2011},
    {name:'AzerSun' , category:'Development' , start:1997 , end:2001},
    {name:'Veyseloglu' , category:'Design' , start:1988 , end:2018},
]

//Task1
companies.filter(el=> el.start>=1988 && el.end <2014 ? console.log(el) : false)

//Task2
companies.filter(el=>el.end-el.start==25 ? console.log(el) : false)

//Task3
let arr=companies.sort((a,b)=>a.name>b.name ? 1 : -1)
console.log(arr);

