import React, { useState, useEffect } from "react";
import { show, hide } from "react-functional-modal";
import { MenuPriceStatus } from "./PriceStatus";
import { OptionOfMenu } from "./OptionStatus";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { CustomOptions } from "./Orderdata";
import CustomizedAccordions from "./CustomizedAccordions";

let counter = 0;
function Modalboxdesign() {
  const {
    ///////////////////////cake////////////////////////
    tiramisu,
    tiramisustrawberry,
    hazelnutchocolatecake,
    carrotcake,
    burntcheesecake,
    oreomilkcake,
    //////////////////////combo/////////////////////////
    coffeeanddonutset,
    coffeeandonionbagelset,
    coffeeandplainbagelset,
    quattrocheesegrilledpaniniset,
    hamcheessmuffinset,
    peperonigrilledcheesepaniniset,
    hotchickengrilledpaniniset,
    macaronset8plus1, //excluded bag and +1 price.
    //////////////////////coffee/////////////////////////
    americano,
    banaricano,
    cafelatte,
    cinnamonlatte,
    coldbrew,
    condensedlatte,
    creamylatte,
    dolcecoldbrew,
    espresso,
    honeyamericano,
    milkcaramelmacciato,
    pistachiocafelatte,
    signatureamericano,
    signaturecoldbrew,
    vanillacoldbrew,
    vanillalatte,
    //////////////////////decaf/////////////////////////
    decafamericano,
    decafbanaricano,
    decafcafelatte,
    decafcinnamonlatte,
    decafcondensed,
    decafcreamylatte,
    decafespresso,
    decafhoneyamericano,
    decafmilkcaramelmacciato,
    decafpistachio,
    decafvanillalatte,
    //////////////////////milk/////////////////////////
    blacksugarbubbletea,
    blacksugarmilktea,
    chaimilktea,
    classicmilktea,
    dalgonalatte,
    earlgreybubbletea,
    earlgreymilktea,
    greentealatte,
    oatmeallatte,
    pistachiolatte,
    realchoco,
    realvanillabean,
    ripepersimmonlatte,
    royalmilktea,
    strawberrylatte,
    toffeenutlatte,
    //////////////////////juicedrink/////////////////////////
    goldmedalapplejuice, //from web
    goldmedalsparkling, // from web
    mangojuice,
    peachyogurtdrink,
    perrierlemon,
    perrierlime,
    plainyogurtdrink,
    ripepersimmonjuice,
    strawberrybananajuice,
    strawberryjuice,
    strawberryyogurtdrink,
    tomatofreshjuice,
    //////////////////////smothiebanaccino/////////////////////////
    chocoshake,
    cookieandcreambanaccino,
    greenteabanaccino,
    javachipbanaccino,
    lemonstrawberrysmoothie,
    lemonyogurtsmoothie,
    mangosmoothie,
    mintchocobanaccino,
    strawberrypeachsmoothie,
    strawberrysmoothie,
    vanillashake,
    //////////////////////teaade/////////////////////////
    chamomilelycheetea,
    chamomile,
    yujaappletea,
    earlgrey,
    gingerlemontea,
    grapefruitade,
    grapefruithibiscustea,
    greengrapeade,
    hibiscus,
    honeygrapefruittea,
    honeylemontea,
    jejugreentangerinetea,
    jujubeblackherbaltea,
    lemonade,
    lemonpepperminttea,
    mintyujapeartea,
    newpeachicedtea,
    peachade,
    pearbellflowerroottea,
    peppermint,
    //////////////////////bread/////////////////////////
    clubsandwich,
    custarddonut,
    eggbaconsandwich,
    hamcheeseenglishmuffin,
    hotchickengrilledpanini,
    jalapenobulgogisandwich,
    onionbagel,
    paulycreamcheese,
    peperonigrilledcheesepanini,
    plainbagel,
    quattrocheesegrilledpanini,
    tunasandwich,
    //////////////////////dessert/////////////////////////
    almondbonbonmacaron,
    americancookie,
    chocochipcookie,
    chocolatemacaron,
    cookieandcreammacaron,
    dessertshoppingbag,
    greenteawhitecookie,
    injeolmimacaron,
    marlenkacake_cocoa,
    marlenkacake_walnut,
    milkmacaron,
    mintchocomacaron,
    raspberrymacaron,
    vanillamacaron,
    yellowcheesemacaron,
    //////////////////////MD/////////////////////////
    point_9900,
    point_10000,
    point_30000,
    point_50000,
    acrylkeyring_typea, //smart store price
    acrylkeyring_typeb, //smart store price
    acrylkeyring_typec, //smart store price
    acrylkeyring_typed, //smart store price
    dripbag_blend,
    ethifacekeyring,
    ethimonitordoll, //smart store price
    maskingtape_babybokthi, //smart store price
    maskingtape_babyethi, //smart store price
    memopad_babybokthi, //smart store price
    memopad_babyethi, //smart store price
    mousepad_babybokthi, //smart store price
    mousepad_babyethi, //smart store price
    note_babyethiandbokthi, //smart store price
    pouch_babyethiandbokthi, //smart store price
    removablesticker_babybokthi, //smart store price
    removablesticker_babyethi, //smart store price
    removablesticker_babyethiandbokthi, //smart store price
    reusabletubler_pink,
    reusabletubler_white,
    smarttok_babyethi,
    smarttok_babybokthi, //smart store price
  } = MenuPriceStatus();

  const {
    ///////////////////////cake////////////////////////
    istiramisu,
    Settiramisutrue,
    Settiramisufalse,

    istiramisustrawberry,
    Settiramisustrawberrytrue,
    Settiramisustrawberryfalse,

    ishazelnutchocolatecake,
    Sethazelnutchocolatecaketrue,
    Sethazelnutchocolatecakefalse,

    iscarrotcake,
    Setcarrotcaketrue,
    Setcarrotcakefalse,

    isburntcheesecake,
    Setburntcheesecaketrue,
    Setburntcheesecakefalse,

    isoreomilkcake,
    Setoreomilkcaketrue,
    Setoreomilkcakefalse,

    //////////////////////combo/////////////////////////
    iscoffeeanddonutset,
    Setcoffeeanddonutsettrue,
    Setcoffeeanddonutsetfalse,

    iscoffeeandonionbagelset,
    Setcoffeeandonionbagelsettrue,
    Setcoffeeandonionbagelsetfalse,

    iscoffeeandplainbagelset,
    Setcoffeeandplainbagelsettrue,
    Setcoffeeandplainbagelsetfalse,

    isquattrocheesegrilledpaniniset,
    Setquattrocheesegrilledpaninisettrue,
    Setquattrocheesegrilledpaninisetfalse,

    ishamcheessmuffinset,
    Sethamcheessmuffinsettrue,
    Sethamcheessmuffinsetfalse,

    ispeperonigrilledcheesepaniniset,
    Setpeperonigrilledcheesepaninisettrue,
    Setpeperonigrilledcheesepaninisetfalse,

    ishotchickengrilledpaniniset,
    Sethotchickengrilledpaninisettrue,
    Sethotchickengrilledpaninisetfalse,

    ismacaronsetplus, //excluded bag and + price.
    Setmacaronsetplustrue,
    Setmacaronsetplusfalse,

    //////////////////////coffee/////////////////////////
    isamericano,
    Setamericanotrue,
    Setamericanofalse,

    isbanaricano,
    Setbanaricanotrue,
    Setbanaricanofalse,

    iscafelatte,
    Setcafelattetrue,
    Setcafelattefalse,

    iscinnamonlatte,
    Setcinnamonlattetrue,
    Setcinnamonlattefalse,

    iscoldbrew,
    Setcoldbrewtrue,
    Setcoldbrewfalse,

    iscondensedlatte,
    Setcondensedlattetrue,
    Setcondensedlattefalse,

    iscreamylatte,
    Setcreamylattetrue,
    Setcreamylattefalse,

    isdolcecoldbrew,
    Setdolcecoldbrewtrue,
    Setdolcecoldbrewfalse,

    isespresso,
    Setespressotrue,
    Setespressofalse,

    ishoneyamericano,
    Sethoneyamericanotrue,
    Sethoneyamericanofalse,

    ismilkcaramelmacciato,
    Setmilkcaramelmacciatotrue,
    Setmilkcaramelmacciatofalse,

    ispistachiocafelatte,
    Setpistachiocafelattetrue,
    Setpistachiocafelattefalse,

    issignatureamericano,
    Setsignatureamericanotrue,
    Setsignatureamericanofalse,

    issignaturecoldbrew,
    Setsignaturecoldbrewtrue,
    Setsignaturecoldbrewfalse,

    isvanillacoldbrew,
    Setvanillacoldbrewtrue,
    Setvanillacoldbrewfalse,

    isvanillalatte,
    Setvanillalattetrue,
    Setvanillalattefalse,

    //////////////////////decaf/////////////////////////
    isdecafamericano,
    Setdecafamericanotrue,
    Setdecafamericanofalse,

    isdecafbanaricano,
    Setdecafbanaricanotrue,
    Setdecafbanaricanofalse,

    isdecafcafelatte,
    Setdecafcafelattetrue,
    Setdecafcafelattefalse,

    isdecafcinnamonlatte,
    Setdecafcinnamonlattetrue,
    Setdecafcinnamonlattefalse,

    isdecafcondensed,
    Setdecafcondensedtrue,
    Setdecafcondensedfalse,

    isdecafcreamylatte,
    Setdecafcreamylattetrue,
    Setdecafcreamylattefalse,

    isdecafespresso,
    Setdecafespressotrue,
    Setdecafespressofalse,

    isdecafhoneyamericano,
    Setdecafhoneyamericanotrue,
    Setdecafhoneyamericanofalse,

    isdecafmilkcaramelmacciato,
    Setdecafmilkcaramelmacciatotrue,
    Setdecafmilkcaramelmacciatofalse,

    isdecafpistachio,
    Setdecafpistachiotrue,
    Setdecafpistachiofalse,

    isdecafvanillalatte,
    Setdecafvanillalattetrue,
    Setdecafvanillalattefalse,

    //////////////////////milk/////////////////////////

    isblacksugarbubbletea,
    Setblacksugarbubbleteatrue,
    Setblacksugarbubbleteafalse,

    isblacksugarmilktea,
    Setblacksugarmilkteatrue,
    Setblacksugarmilkteafalse,

    ischaimilktea,
    Setchaimilkteatrue,
    Setchaimilkteafalse,

    isclassicmilktea,
    Setclassicmilkteatrue,
    Setclassicmilkteafalse,

    isdalgonalatte,
    Setdalgonalattetrue,
    Setdalgonalattefalse,

    isearlgreybubbletea,
    Setearlgreybubbleteatrue,
    Setearlgreybubbleteafalse,

    isearlgreymilktea,
    Setearlgreymilkteatrue,
    Setearlgreymilkteafalse,

    isgreentealatte,
    Setgreentealattetrue,
    Setgreentealattefalse,

    isoatmeallatte,
    Setoatmeallattetrue,
    Setoatmeallattefalse,

    ispistachiolatte,
    Setpistachiolattetrue,
    Setpistachiolattefalse,

    isrealchoco,
    Setrealchocotrue,
    Setrealchocofalse,

    isrealvanillabean,
    Setrealvanillabeantrue,
    Setrealvanillabeanfalse,

    isripepersimmonlatte,
    Setripepersimmonlattetrue,
    Setripepersimmonlattefalse,

    isroyalmilktea,
    Setroyalmilkteatrue,
    Setroyalmilkteafalse,

    isstrawberrylatte,
    Setstrawberrylattetrue,
    Setstrawberrylattefalse,

    istoffeenutlatte,
    Settoffeenutlattetrue,
    Settoffeenutlattefalse,

    //////////////////////juicedrink/////////////////////////

    isgoldmedalapplejuice, //from web
    Setgoldmedalapplejuicetrue,
    Setgoldmedalapplejuicefalse,

    isgoldmedalsparkling, // from web
    Setgoldmedalsparklingtrue,
    Setgoldmedalsparklingfalse,

    ismangojuice,
    Setmangojuicetrue,
    Setmangojuicefalse,

    ispeachyogurtdrink,
    Setpeachyogurtdrinktrue,
    Setpeachyogurtdrinkfalse,

    isperrierlemon,
    Setperrierlemontrue,
    Setperrierlemonfalse,

    isperrierlime,
    Setperrierlimetrue,
    Setperrierlimefalse,

    isplainyogurtdrink,
    Setplainyogurtdrinktrue,
    Setplainyogurtdrinkfalse,

    isripepersimmonjuice,
    Setripepersimmonjuicetrue,
    Setripepersimmonjuicefalse,

    isstrawberrybananajuice,
    Setstrawberrybananajuicetrue,
    Setstrawberrybananajuicefalse,

    isstrawberryjuice,
    Setstrawberryjuicetrue,
    Setstrawberryjuicefalse,

    isstrawberryyogurtdrink,
    Setstrawberryyogurtdrinktrue,
    Setstrawberryyogurtdrinkfalse,

    istomatofreshjuice,
    Settomatofreshjuicetrue,
    Settomatofreshjuicefalse,

    //////////////////////smothiebanaccino/////////////////////////

    ischocoshake,
    Setchocoshaketrue,
    Setchocoshakefalse,

    iscookieandcreambanaccino,
    Setcookieandcreambanaccinotrue,
    Setcookieandcreambanaccinofalse,

    isgreenteabanaccino,
    Setgreenteabanaccinotrue,
    Setgreenteabanaccinofalse,

    isjavachipbanaccino,
    Setjavachipbanaccinotrue,
    Setjavachipbanaccinofalse,

    islemonstrawberrysmoothie,
    Setlemonstrawberrysmoothietrue,
    Setlemonstrawberrysmoothiefalse,

    islemonyogurtsmoothie,
    Setlemonyogurtsmoothietrue,
    Setlemonyogurtsmoothiefalse,

    ismangosmoothie,
    Setmangosmoothietrue,
    Setmangosmoothiefalse,

    ismintchocobanaccino,
    Setmintchocobanaccinotrue,
    Setmintchocobanaccinofalse,

    isstrawberrypeachsmoothie,
    Setstrawberrypeachsmoothietrue,
    Setstrawberrypeachsmoothiefalse,

    isstrawberrysmoothie,
    Setstrawberrysmoothietrue,
    Setstrawberrysmoothiefalse,

    isvanillashake,
    Setvanillashaketrue,
    Setvanillashakefalse,

    //////////////////////teaade/////////////////////////

    ischamomilelycheetea,
    Setchamomilelycheeteatrue,
    Setchamomilelycheeteafalse,

    ischamomile,
    Setchamomiletrue,
    Setchamomilefalse,

    isyujaappletea,
    Setyujaappleteatrue,
    Setyujaappleteafalse,

    isearlgrey,
    Setearlgreytrue,
    Setearlgreyfalse,

    isgingerlemontea,
    Setgingerlemonteatrue,
    Setgingerlemonteafalse,

    isgrapefruitade,
    Setgrapefruitadetrue,
    Setgrapefruitadefalse,

    isgrapefruithibiscustea,
    Setgrapefruithibiscusteatrue,
    Setgrapefruithibiscusteafalse,

    isgreengrapeade,
    Setgreengrapeadetrue,
    Setgreengrapeadefalse,

    ishibiscus,
    Sethibiscustrue,
    Sethibiscusfalse,

    ishoneygrapefruittea,
    Sethoneygrapefruitteatrue,
    Sethoneygrapefruitteafalse,

    ishoneylemontea,
    Sethoneylemonteatrue,
    Sethoneylemonteafalse,

    isjejugreentangerinetea,
    Setjejugreentangerineteatrue,
    Setjejugreentangerineteafalse,

    isjujubeblackherbaltea,
    Setjujubeblackherbalteatrue,
    Setjujubeblackherbalteafalse,

    islemonade,
    Setlemonadetrue,
    Setlemonadefalse,

    islemonpepperminttea,
    Setlemonpeppermintteatrue,
    Setlemonpeppermintteafalse,

    ismintyujapeartea,
    Setmintyujapearteatrue,
    Setmintyujapearteafalse,

    isnewpeachicedtea,
    Setnewpeachicedteatrue,
    Setnewpeachicedteafalse,

    ispeachade,
    Setpeachadetrue,
    Setpeachadefalse,

    ispearbellflowerroottea,
    Setpearbellflowerrootteatrue,
    Setpearbellflowerrootteafalse,

    ispeppermint,
    Setpepperminttrue,
    Setpeppermintfalse,

    //////////////////////bread/////////////////////////

    isclubsandwich,
    Setclubsandwichtrue,
    Setclubsandwichfalse,

    iscustarddonut,
    Setcustarddonuttrue,
    Setcustarddonutfalse,

    iseggbaconsandwich,
    Seteggbaconsandwichtrue,
    Seteggbaconsandwichfalse,

    ishamcheeseenglishmuffin,
    Sethamcheeseenglishmuffintrue,
    Sethamcheeseenglishmuffinfalse,

    ishotchickengrilledpanini,
    Sethotchickengrilledpaninitrue,
    Sethotchickengrilledpaninifalse,

    isjalapenobulgogisandwich,
    Setjalapenobulgogisandwichtrue,
    Setjalapenobulgogisandwichfalse,

    isonionbagel,
    Setonionbageltrue,
    Setonionbagelfalse,

    ispaulycreamcheese,
    Setpaulycreamcheesetrue,
    Setpaulycreamcheesefalse,

    ispeperonigrilledcheesepanini,
    Setpeperonigrilledcheesepaninitrue,
    Setpeperonigrilledcheesepaninifalse,

    isplainbagel,
    Setplainbageltrue,
    Setplainbagelfalse,

    isquattrocheesegrilledpanini,
    Setquattrocheesegrilledpaninitrue,
    Setquattrocheesegrilledpaninifalse,

    istunasandwich,
    Settunasandwichtrue,
    Settunasandwichfalse,

    //////////////////////dessert/////////////////////////

    isalmondbonbonmacaron,
    Setalmondbonbonmacarontrue,
    Setalmondbonbonmacaronfalse,

    isamericancookie,
    Setamericancookietrue,
    Setamericancookiefalse,

    ischocochipcookie,
    Setchocochipcookietrue,
    Setchocochipcookiefalse,

    ischocolatemacaron,
    Setchocolatemacarontrue,
    Setchocolatemacaronfalse,

    iscookieandcreammacaron,
    Setcookieandcreammacarontrue,
    Setcookieandcreammacaronfalse,

    isdessertshoppingbag,
    Setdessertshoppingsetrue,
    Setdessertshoppingbagfalse,

    isgreenteawhitecookie,
    Setgreenteawhitecookietrue,
    Setgreenteawhitecookiefalse,

    isinjeolmimacaron,
    Setinjeolmimacarontrue,
    Setinjeolmimacaronfalse,

    ismarlenkacake_cocoa,
    Setmarlenkacake_cocoatrue,
    Setmarlenkacake_cocoafalse,

    ismarlenkacake_walnut,
    Setmarlenkacake_walnuttrue,
    Setmarlenkacake_walnutfalse,

    ismilkmacaron,
    Setmilkmacarontrue,
    Setmilkmacaronfalse,

    ismintchocomacaron,
    Setmintchocomacarontrue,
    Setmintchocomacaronfalse,

    israspberrymacaron,
    Setraspberrymacarontrue,
    Setraspberrymacaronfalse,

    isvanillamacaron,
    Setvanillamacarontrue,
    Setvanillamacaronfalse,

    isyellowcheesemacaron,
    Setyellowcheesemacarontrue,
    Setyellowcheesemacaronfalse,

    //////////////////////MD/////////////////////////

    ispoint_9900,
    Setpoint_9900true,
    Setpoint_9900false,

    ispoint_10000,
    Setpoint_10000true,
    Setpoint_10000false,

    ispoint_30000,
    Setpoint_30000true,
    Setpoint_30000false,

    ispoint_50000,
    Setpoint_50000true,
    Setpoint_50000false,

    isacrylkeyring_typea, //smart store price
    Setacrylkeyring_typeatrue,
    Setacrylkeyring_typeafalse,

    isacrylkeyring_typeb, //smart store price
    Setacrylkeyring_typebtrue,
    Setacrylkeyring_typebfalse,

    isacrylkeyring_typec, //smart store price
    Setacrylkeyring_typectrue,
    Setacrylkeyring_typecfalse,

    isacrylkeyring_typed, //smart store price
    Setacrylkeyring_typedtrue,
    Setacrylkeyring_typedfalse,

    isdripbag_blend,
    Setdripbag_blendtrue,
    Setdripbag_blendfalse,

    isethifacekeyring,
    Setethifacekeyringtrue,
    Setethifacekeyringfalse,

    isethimonitordoll, //smart store price
    Setethimonitordolltrue,
    Setethimonitordollfalse,

    ismaskingtape_babybokthi, //smart store price
    Setmaskingtape_babybokthitrue,
    Setmaskingtape_babybokthifalse,

    ismaskingtape_babyethi, //smart store price
    Setmaskingtape_babyethitrue,
    Setmaskingtape_babyethifalse,

    ismemopad_babybokthi, //smart store price
    Setmemopad_babybokthitrue,
    Setmemopad_babybokthifalse,

    ismemopad_babyethi, //smart store price
    Setmemopad_babyethitrue,
    Setmemopad_babyethifalse,

    ismousepad_babybokthi, //smart store price
    Setmousepad_babybokthitrue,
    Setmousepad_babybokthifalse,

    ismousepad_babyethi, //smart store price
    Setmousepad_babyethitrue,
    Setmousepad_babyethifalse,

    isnote_babyethiandbokthi, //smart store price
    Setnote_babyethiandbokthitrue,
    Setnote_babyethiandbokthifalse,

    ispouch_babyethiandbokthi, //smart store price
    Setpouch_babyethiandbokthitrue,
    Setpouch_babyethiandbokthifalse,

    isremovablesticker_babybokthi, //smart store price
    Setremovablesticker_babybokthitrue,
    Setremovablesticker_babybokthifalse,

    isremovablesticker_babyethi, //smart store price
    Setremovablesticker_babyethitrue,
    Setremovablesticker_babyethifalse,

    isremovablesticker_babyethiandbokthi, //smart store price
    Setremovablesticker_babyethiandbokthitrue,
    Setremovablesticker_babyethiandbokthifalse,

    isreusabletubler_pink,
    Setreusabletubler_pinktrue,
    Setreusabletubler_pinkfalse,

    isreusabletubler_white,
    Setreusabletubler_whitetrue,
    Setreusabletubler_whitefalse,

    issmarttok_babyethi,
    Setsmarttok_babyethitrue,
    Setsmarttok_babyethifalse,

    issmarttok_babybokthi, //smart store price
    Setsmarttok_babybokthitrue,
    Setsmarttok_babybokthifalse,

    ismodalexit,
    Setismodalexittrue,
    Setismodalexitfalse,
  } = OptionOfMenu();

  const {
    menuname,
    setmenuname,
    menuprice,
    setmenuprice,
    menutype,
    setmenutype,
    menuid,
    setmenuid,
    receipt,
    setreceipt,
    sum,
    addsum,
    setsum,
    setoptionitem,
    optionitem,
    increaseoptionitem,
    decreaseoptionitem,

    optioniced,
    setoptioniced,
    increaseoptioniced,
    decreaseoptioniced,

    optionhot,
    setoptionhot,
    increaseoptionhot,
    decreaseoptionhot,
    cshowtype,
    setcshowtype,
    valueoflist,
    setvalueoflist,
  } = CustomOptions();

  useEffect(() => {
    if (istiramisu) {
      setmenutype(2);
      setmenuname("????????????");
      setmenuprice(tiramisu);
      setmenuid(21);
    } else if (istiramisustrawberry) {
      setmenutype(2);
      setmenuname("??????????????????");
      setmenuprice(tiramisustrawberry);
      setmenuid(22);
    } else if (ishazelnutchocolatecake) {
      setmenutype(2);
      setmenuname("??????????????????????????????");
      setmenuprice(hazelnutchocolatecake);
      setmenuid(23);
    } else if (iscarrotcake) {
      setmenutype(2);
      setmenuname("???????????????");
      setmenuprice(carrotcake);
      setmenuid(24);
    } else if (isburntcheesecake) {
      setmenutype(2);
      setmenuname("?????????????????????");
      setmenuprice(burntcheesecake);
      setmenuid(25);
    } else if (isoreomilkcake) {
      setmenutype(2);
      setmenuname("????????????????????????");
      setmenuprice(oreomilkcake);
      setmenuid(26);
    } else if (iscoffeeanddonutset) {
      setmenutype(3);
      setmenuname("??????&????????????");
      setmenuprice(coffeeanddonutset);
      setmenuid(31);
    } else if (iscoffeeandonionbagelset) {
      setmenutype(3);
      setmenuname("??????&????????????????????????");
      setmenuprice(coffeeandonionbagelset);
      setmenuid(32);
    } else if (iscoffeeandplainbagelset) {
      setmenutype(3);
      setmenuname("??????&????????????????????????");
      setmenuprice(coffeeandplainbagelset);
      setmenuid(33);
    } else if (isquattrocheesegrilledpaniniset) {
      setmenutype(3);
      setmenuname("????????????????????????????????? ??????");
      setmenuprice(quattrocheesegrilledpaniniset);
      setmenuid(34);
    } else if (ishamcheessmuffinset) {
      setmenutype(3);
      setmenuname("?????????????????????");
      setmenuprice(hamcheessmuffinset);
      setmenuid(35);
    } else if (ispeperonigrilledcheesepaniniset) {
      setmenutype(3);
      setmenuname("???????????????????????????????????? ??????");
      setmenuprice(peperonigrilledcheesepaniniset);
      setmenuid(36);
    } else if (ishotchickengrilledpaniniset) {
      setmenutype(3);
      setmenuname("????????????????????????????????? ??????");
      setmenuprice(hotchickengrilledpaniniset);
      setmenuid(37);
    } else if (ismacaronsetplus) {
      setmenutype(3);
      setmenuname("???????????????8+1");
      setmenuprice(macaronset8plus1);
      setmenuid(38);
    } else if (isamericano) {
      setmenutype(4);
      setmenuname("???????????????");
      setmenuprice(americano);
      setmenuid(41);
    } else if (isbanaricano) {
      setmenutype(4);
      setmenuname("???????????????");
      setmenuprice(banaricano);
      setmenuid(42);
    } else if (iscafelatte) {
      setmenutype(4);
      setmenuname("????????????");
      setmenuprice(cafelatte);
      setmenuid(43);
    } else if (iscinnamonlatte) {
      setmenutype(4);
      setmenuname("???????????????");
      setmenuprice(cinnamonlatte);
      setmenuid(44);
    } else if (iscoldbrew) {
      setmenutype(4);
      setmenuname("????????????");
      setmenuprice(coldbrew);
      setmenuid(45);
    } else if (iscondensedlatte) {
      setmenutype(4);
      setmenuname("????????????");
      setmenuprice(condensedlatte);
      setmenuid(46);
    } else if (iscreamylatte) {
      setmenutype(4);
      setmenuname("???????????????");
      setmenuprice(creamylatte);
      setmenuid(47);
    } else if (isdolcecoldbrew) {
      setmenutype(4);
      setmenuname("?????? ????????????");
      setmenuprice(dolcecoldbrew);
      setmenuid(48);
    } else if (isespresso) {
      setmenutype(4);
      setmenuname("???????????????");
      setmenuprice(espresso);
      setmenuid(49);
    } else if (ishoneyamericano) {
      setmenutype(4);
      setmenuname("?????????????????????");
      setmenuprice(honeyamericano);
      setmenuid(410);
    } else if (ismilkcaramelmacciato) {
      setmenutype(4);
      setmenuname("???????????????????????????");
      setmenuprice(milkcaramelmacciato);
      setmenuid(411);
    } else if (ispistachiocafelatte) {
      setmenutype(4);
      setmenuname("???????????????????????????");
      setmenuprice(pistachiocafelatte);
      setmenuid(412);
    } else if (issignatureamericano) {
      setmenutype(4);
      setmenuname("???????????????????????????");
      setmenuprice(signatureamericano);
      setmenuid(413);
    } else if (issignaturecoldbrew) {
      setmenutype(4);
      setmenuname("????????????????????????");
      setmenuprice(signaturecoldbrew);
      setmenuid(414);
    } else if (isvanillacoldbrew) {
      setmenutype(4);
      setmenuname("????????? ????????????");
      setmenuprice(vanillacoldbrew);
      setmenuid(415);
    } else if (isvanillalatte) {
      setmenutype(4);
      setmenuname("???????????????");
      setmenuprice(vanillalatte);
      setmenuid(416);
    } else if (isdecafamericano) {
      setmenutype(5);
      setmenuname("???????????? ???????????????");
      setmenuprice(decafamericano);
      setmenuid(51);
    } else if (isdecafbanaricano) {
      setmenutype(5);
      setmenuname("???????????? ???????????????");
      setmenuprice(decafbanaricano);
      setmenuid(52);
    } else if (isdecafcafelatte) {
      setmenutype(5);
      setmenuname("???????????? ????????????");
      setmenuprice(decafcafelatte);
      setmenuid(53);
    } else if (isdecafcinnamonlatte) {
      setmenutype(5);
      setmenuname("???????????? ???????????????");
      setmenuprice(decafcinnamonlatte);
      setmenuid(54);
    } else if (isdecafcondensed) {
      setmenutype(5);
      setmenuname("???????????? ????????????");
      setmenuprice(decafcondensed);
      setmenuid(55);
    } else if (isdecafcreamylatte) {
      setmenutype(5);
      setmenuname("???????????? ???????????????");
      setmenuprice(decafcreamylatte);
      setmenuid(56);
    } else if (isdecafespresso) {
      setmenutype(5);
      setmenuname("???????????? ???????????????");
      setmenuprice(decafespresso);
      setmenuid(57);
    } else if (isdecafhoneyamericano) {
      setmenutype(5);
      setmenuname("???????????? ?????????????????????");
      setmenuprice(decafhoneyamericano);
      setmenuid(58);
    } else if (isdecafmilkcaramelmacciato) {
      setmenutype(5);
      setmenuname("???????????? ???????????????????????????");
      setmenuprice(decafmilkcaramelmacciato);
      setmenuid(59);
    } else if (isdecafpistachio) {
      setmenutype(5);
      setmenuname("???????????? ???????????????????????????");
      setmenuprice(decafpistachio);
      setmenuid(510);
    } else if (isdecafvanillalatte) {
      setmenutype(5);
      setmenuname("???????????? ???????????????");
      setmenuprice(decafvanillalatte);
      setmenuid(511);
    } else if (isblacksugarbubbletea) {
      setmenutype(6);
      setmenuname("???????????????");
      setmenuprice(blacksugarbubbletea);
      setmenuid(61);
    } else if (isblacksugarmilktea) {
      setmenutype(6);
      setmenuname("???????????????");
      setmenuprice(blacksugarmilktea);
      setmenuid(62);
    } else if (ischaimilktea) {
      setmenutype(6);
      setmenuname("???????????????");
      setmenuprice(chaimilktea);
      setmenuid(63);
    } else if (isclassicmilktea) {
      setmenutype(6);
      setmenuname("??????????????????");
      setmenuprice(classicmilktea);
      setmenuid(64);
    } else if (isdalgonalatte) {
      setmenutype(6);
      setmenuname("???????????????");
      setmenuprice(dalgonalatte);
      setmenuid(65);
    } else if (isearlgreybubbletea) {
      setmenutype(6);
      setmenuname("?????????????????????");
      setmenuprice(earlgreybubbletea);
      setmenuid(66);
    } else if (isearlgreymilktea) {
      setmenutype(6);
      setmenuname("?????????????????????");
      setmenuprice(earlgreymilktea);
      setmenuid(67);
    } else if (isgreentealatte) {
      setmenutype(6);
      setmenuname("????????????");
      setmenuprice(greentealatte);
      setmenuid(68);
    } else if (isoatmeallatte) {
      setmenutype(6);
      setmenuname("???????????????");
      setmenuprice(oatmeallatte);
      setmenuid(69);
    } else if (ispistachiolatte) {
      setmenutype(6);
      setmenuname("?????????????????????");
      setmenuprice(pistachiolatte);
      setmenuid(610);
    } else if (isrealchoco) {
      setmenutype(6);
      setmenuname("????????????");
      setmenuprice(realchoco);
      setmenuid(611);
    } else if (isrealvanillabean) {
      setmenutype(6);
      setmenuname("??????????????????");
      setmenuprice(realvanillabean);
      setmenuid(612);
    } else if (isripepersimmonlatte) {
      setmenutype(6);
      setmenuname("????????????");
      setmenuprice(ripepersimmonlatte);
      setmenuid(613);
    } else if (isroyalmilktea) {
      setmenutype(6);
      setmenuname("???????????????");
      setmenuprice(royalmilktea);
      setmenuid(614);
    } else if (isstrawberrylatte) {
      setmenutype(6);
      setmenuname("????????????");
      setmenuprice(strawberrylatte);
      setmenuid(615);
    } else if (istoffeenutlatte) {
      setmenutype(6);
      setmenuname("???????????????");
      setmenuprice(toffeenutlatte);
      setmenuid(616);
    } else if (isgoldmedalapplejuice) {
      setmenutype(7);
      setmenuname("???????????? ????????????");
      setmenuprice(goldmedalapplejuice);
      setmenuid(71);
    } else if (isgoldmedalsparkling) {
      setmenutype(7);
      setmenuname("???????????? ??????????????????");
      setmenuprice(goldmedalsparkling);
      setmenuid(72);
    } else if (ismangojuice) {
      setmenutype(7);
      setmenuname("????????????");
      setmenuprice(mangojuice);
      setmenuid(73);
    } else if (ispeachyogurtdrink) {
      setmenutype(7);
      setmenuname("???????????????????????????");
      setmenuprice(peachyogurtdrink);
      setmenuid(74);
    } else if (isperrierlemon) {
      setmenutype(7);
      setmenuname("???????????????");
      setmenuprice(perrierlemon);
      setmenuid(75);
    } else if (isperrierlime) {
      setmenutype(7);
      setmenuname("???????????????");
      setmenuprice(perrierlime);
      setmenuid(76);
    } else if (isplainyogurtdrink) {
      setmenutype(7);
      setmenuname("???????????????????????????");
      setmenuprice(plainyogurtdrink);
      setmenuid(77);
    } else if (isripepersimmonjuice) {
      setmenutype(7);
      setmenuname("????????????");
      setmenuprice(ripepersimmonjuice);
      setmenuid(78);
    } else if (isstrawberrybananajuice) {
      setmenutype(7);
      setmenuname("?????????????????????");
      setmenuprice(strawberrybananajuice);
      setmenuid(79);
    } else if (isstrawberryjuice) {
      setmenutype(7);
      setmenuname("????????????");
      setmenuprice(strawberryjuice);
      setmenuid(710);
    } else if (isstrawberryyogurtdrink) {
      setmenutype(7);
      setmenuname("????????????????????????");
      setmenuprice(strawberryyogurtdrink);
      setmenuid(711);
    } else if (istomatofreshjuice) {
      setmenutype(7);
      setmenuname("????????????????????????");
      setmenuprice(tomatofreshjuice);
      setmenuid(712);
    } else if (ischocoshake) {
      setmenutype(8);
      setmenuname("???????????????");
      setmenuprice(chocoshake);
      setmenuid(81);
    } else if (iscookieandcreambanaccino) {
      setmenutype(8);
      setmenuname("?????????????????????");
      setmenuprice(cookieandcreambanaccino);
      setmenuid(82);
    } else if (isgreenteabanaccino) {
      setmenutype(8);
      setmenuname("??????????????????");
      setmenuprice(greenteabanaccino);
      setmenuid(83);
    } else if (isjavachipbanaccino) {
      setmenutype(8);
      setmenuname("?????????????????????");
      setmenuprice(javachipbanaccino);
      setmenuid(84);
    } else if (islemonstrawberrysmoothie) {
      setmenutype(8);
      setmenuname("?????????????????????");
      setmenuprice(lemonstrawberrysmoothie);
      setmenuid(85);
    } else if (islemonyogurtsmoothie) {
      setmenutype(8);
      setmenuname("????????????????????????");
      setmenuprice(lemonyogurtsmoothie);
      setmenuid(86);
    } else if (ismangosmoothie) {
      setmenutype(8);
      setmenuname("???????????????");
      setmenuprice(mangosmoothie);
      setmenuid(87);
    } else if (ismintchocobanaccino) {
      setmenutype(8);
      setmenuname("????????????????????????");
      setmenuprice(mintchocobanaccino);
      setmenuid(88);
    } else if (isstrawberrypeachsmoothie) {
      setmenutype(8);
      setmenuname("????????????????????????");
      setmenuprice(strawberrypeachsmoothie);
      setmenuid(89);
    } else if (isstrawberrysmoothie) {
      setmenutype(8);
      setmenuname("???????????????");
      setmenuprice(strawberrysmoothie);
      setmenuid(810);
    } else if (isvanillashake) {
      setmenutype(8);
      setmenuname("??????????????????");
      setmenuprice(vanillashake);
      setmenuid(811);
    } else if (ischamomilelycheetea) {
      setmenutype(9);
      setmenuname("?????????????????????");
      setmenuprice(chamomilelycheetea);
      setmenuid(91);
    } else if (ischamomile) {
      setmenutype(9);
      setmenuname("????????????");
      setmenuprice(chamomile);
      setmenuid(92);
    } else if (isyujaappletea) {
      setmenutype(9);
      setmenuname("???????????????");
      setmenuprice(yujaappletea);
      setmenuid(93);
    } else if (isearlgrey) {
      setmenutype(9);
      setmenuname("????????????");
      setmenuprice(earlgrey);
      setmenuid(94);
    } else if (isgingerlemontea) {
      setmenutype(9);
      setmenuname("???????????????");
      setmenuprice(gingerlemontea);
      setmenuid(95);
    } else if (isgrapefruitade) {
      setmenutype(9);
      setmenuname("???????????????");
      setmenuprice(grapefruitade);
      setmenuid(96);
    } else if (isgrapefruithibiscustea) {
      setmenutype(9);
      setmenuname("????????????????????????");
      setmenuprice(grapefruithibiscustea);
      setmenuid(97);
    } else if (isgreengrapeade) {
      setmenutype(9);
      setmenuname("??????????????????");
      setmenuprice(greengrapeade);
      setmenuid(98);
    } else if (ishibiscus) {
      setmenutype(9);
      setmenuname("???????????????");
      setmenuprice(hibiscus);
      setmenuid(99);
    } else if (ishoneygrapefruittea) {
      setmenutype(9);
      setmenuname("???????????????");
      setmenuprice(honeygrapefruittea);
      setmenuid(910);
    } else if (ishoneylemontea) {
      setmenutype(9);
      setmenuname("???????????????");
      setmenuprice(honeylemontea);
      setmenuid(911);
    } else if (isjejugreentangerinetea) {
      setmenutype(9);
      setmenuname("???????????????");
      setmenuprice(jejugreentangerinetea);
      setmenuid(912);
    } else if (isjujubeblackherbaltea) {
      setmenutype(9);
      setmenuname("???????????????");
      setmenuprice(jujubeblackherbaltea);
      setmenuid(913);
    } else if (islemonade) {
      setmenutype(9);
      setmenuname("???????????????");
      setmenuprice(lemonade);
      setmenuid(914);
    } else if (islemonpepperminttea) {
      setmenutype(9);
      setmenuname("?????????????????????");
      setmenuprice(lemonpepperminttea);
      setmenuid(915);
    } else if (ismintyujapeartea) {
      setmenutype(9);
      setmenuname("?????????????????????");
      setmenuprice(mintyujapeartea);
      setmenuid(916);
    } else if (isnewpeachicedtea) {
      setmenutype(9);
      setmenuname("NEW?????????????????????");
      setmenuprice(newpeachicedtea);
      setmenuid(917);
    } else if (ispeachade) {
      setmenutype(9);
      setmenuname("??????????????????");
      setmenuprice(peachade);
      setmenuid(918);
    } else if (ispearbellflowerroottea) {
      setmenutype(9);
      setmenuname("???????????????");
      setmenuprice(pearbellflowerroottea);
      setmenuid(919);
    } else if (ispeppermint) {
      setmenutype(9);
      setmenuname("????????????");
      setmenuprice(peppermint);
      setmenuid(920);
    } else if (isclubsandwich) {
      setmenutype(10);
      setmenuname("??????????????????");
      setmenuprice(clubsandwich);
      setmenuid(101);
    } else if (iscustarddonut) {
      setmenutype(10);
      setmenuname("??????????????????");
      setmenuprice(custarddonut);
      setmenuid(102);
    } else if (iseggbaconsandwich) {
      setmenutype(10);
      setmenuname("???????????????????????????");
      setmenuprice(eggbaconsandwich);
      setmenuid(103);
    } else if (ishamcheeseenglishmuffin) {
      setmenutype(10);
      setmenuname("???????????????????????????");
      setmenuprice(hamcheeseenglishmuffin);
      setmenuid(104);
    } else if (ishotchickengrilledpanini) {
      setmenutype(10);
      setmenuname("?????????????????????????????????");
      setmenuprice(hotchickengrilledpanini);
      setmenuid(105);
    } else if (isjalapenobulgogisandwich) {
      setmenutype(10);
      setmenuname("?????????????????????????????????");
      setmenuprice(jalapenobulgogisandwich);
      setmenuid(106);
    } else if (isonionbagel) {
      setmenutype(10);
      setmenuname("??????????????????");
      setmenuprice(onionbagel);
      setmenuid(107);
    } else if (ispaulycreamcheese) {
      setmenutype(10);
      setmenuname("??????????????????");
      setmenuprice(paulycreamcheese);
      setmenuid(108);
    } else if (ispeperonigrilledcheesepanini) {
      setmenutype(10);
      setmenuname("????????????????????????????????????");
      setmenuprice(peperonigrilledcheesepanini);
      setmenuid(109);
    } else if (isplainbagel) {
      setmenutype(10);
      setmenuname("??????????????????");
      setmenuprice(plainbagel);
      setmenuid(1010);
    } else if (isquattrocheesegrilledpanini) {
      setmenutype(10);
      setmenuname("?????????????????????????????????");
      setmenuprice(quattrocheesegrilledpanini);
      setmenuid(1011);
    } else if (istunasandwich) {
      setmenutype(10);
      setmenuname("??????????????????");
      setmenuprice(tunasandwich);
      setmenuid(1012);
    } else if (isalmondbonbonmacaron) {
      setmenutype(11);
      setmenuname("????????????????????????");
      setmenuprice(almondbonbonmacaron);
      setmenuid(111);
    } else if (isamericancookie) {
      setmenutype(11);
      setmenuname("??????????????????");
      setmenuprice(americancookie);
      setmenuid(112);
    } else if (ischocochipcookie) {
      setmenutype(11);
      setmenuname("???????????????");
      setmenuprice(chocochipcookie);
      setmenuid(113);
    } else if (ischocolatemacaron) {
      setmenutype(11);
      setmenuname("??????????????????");
      setmenuprice(chocolatemacaron);
      setmenuid(114);
    } else if (iscookieandcreammacaron) {
      setmenutype(11);
      setmenuname("????????????????????????");
      setmenuprice(cookieandcreammacaron);
      setmenuid(115);
    } else if (isdessertshoppingbag) {
      setmenutype(11);
      setmenuname("??????????????????");
      setmenuprice(dessertshoppingbag);
      setmenuid(116);
    } else if (isgreenteawhitecookie) {
      setmenutype(11);
      setmenuname("?????????????????????");
      setmenuprice(greenteawhitecookie);
      setmenuid(117);
    } else if (isinjeolmimacaron) {
      setmenutype(11);
      setmenuname("??????????????????");
      setmenuprice(injeolmimacaron);
      setmenuid(118);
    } else if (ismarlenkacake_cocoa) {
      setmenutype(11);
      setmenuname("??????????????????(?????????)");
      setmenuprice(marlenkacake_cocoa);
      setmenuid(119);
    } else if (ismarlenkacake_walnut) {
      setmenutype(11);
      setmenuname("??????????????????(??????)");
      setmenuprice(marlenkacake_walnut);
      setmenuid(1110);
    } else if (ismilkmacaron) {
      setmenutype(11);
      setmenuname("???????????????");
      setmenuprice(milkmacaron);
      setmenuid(1111);
    } else if (ismintchocomacaron) {
      setmenutype(11);
      setmenuname("?????????????????????");
      setmenuprice(mintchocomacaron);
      setmenuid(1112);
    } else if (israspberrymacaron) {
      setmenutype(11);
      setmenuname("??????????????????");
      setmenuprice(raspberrymacaron);
      setmenuid(1113);
    } else if (isvanillamacaron) {
      setmenutype(11);
      setmenuname("??????????????????");
      setmenuprice(vanillamacaron);
      setmenuid(1114);
    } else if (isyellowcheesemacaron) {
      setmenutype(11);
      setmenuname("??????????????????");
      setmenuprice(yellowcheesemacaron);
      setmenuid(1115);
    } else if (ispoint_9900) {
      setmenutype(12);
      setmenuname("??????????????? ????????? 9,900??????");
      setmenuprice(point_9900);
      setmenuid(121);
    } else if (ispoint_10000) {
      setmenutype(12);
      setmenuname("??????????????? ????????? 1?????????");
      setmenuprice(point_10000);
      setmenuid(122);
    } else if (ispoint_30000) {
      setmenutype(12);
      setmenuname("??????????????? ????????? 3?????????");
      setmenuprice(point_30000);
      setmenuid(123);
    } else if (ispoint_50000) {
      setmenutype(12);
      setmenuname("??????????????? ????????? 5?????????");
      setmenuprice(point_50000);
      setmenuid(124);
    } else if (isacrylkeyring_typea) {
      setmenutype(12);
      setmenuname("???????????????_A??????");
      setmenuprice(acrylkeyring_typea);
      setmenuid(125);
    } else if (isacrylkeyring_typeb) {
      setmenutype(12);
      setmenuname("???????????????_B??????");
      setmenuprice(acrylkeyring_typeb);
      setmenuid(126);
    } else if (isacrylkeyring_typec) {
      setmenutype(12);
      setmenuname("???????????????_C??????");
      setmenuprice(acrylkeyring_typec);
      setmenuid(127);
    } else if (isacrylkeyring_typed) {
      setmenutype(12);
      setmenuname("???????????????_D??????");
      setmenuprice(acrylkeyring_typed);
      setmenuid(128);
    } else if (isdripbag_blend) {
      setmenutype(12);
      setmenuname("?????????(?????????)");
      setmenuprice(dripbag_blend);
      setmenuid(129);
    } else if (isethifacekeyring) {
      setmenutype(12);
      setmenuname("??????????????????");
      setmenuprice(ethifacekeyring);
      setmenuid(1210);
    } else if (isethimonitordoll) {
      setmenutype(12);
      setmenuname("?????????????????????");
      setmenuprice(ethimonitordoll);
      setmenuid(1211);
    } else if (ismaskingtape_babybokthi) {
      setmenutype(12);
      setmenuname("??????????????????_???????????????");
      setmenuprice(maskingtape_babybokthi);
      setmenuid(1212);
    } else if (ismaskingtape_babyethi) {
      setmenutype(12);
      setmenuname("??????????????????_???????????????");
      setmenuprice(maskingtape_babyethi);
      setmenuid(1213);
    } else if (ismemopad_babybokthi) {
      setmenutype(12);
      setmenuname("????????????_???????????????");
      setmenuprice(memopad_babybokthi);
      setmenuid(1214);
    } else if (ismemopad_babyethi) {
      setmenutype(12);
      setmenuname("????????????_???????????????");
      setmenuprice(memopad_babyethi);
      setmenuid(1215);
    } else if (ismousepad_babybokthi) {
      setmenutype(12);
      setmenuname("???????????????_???????????????");
      setmenuprice(mousepad_babybokthi);
      setmenuid(1216);
    } else if (ismousepad_babyethi) {
      setmenutype(12);
      setmenuname("???????????????_???????????????");
      setmenuprice(mousepad_babyethi);
      setmenuid(1217);
    } else if (isnote_babyethiandbokthi) {
      setmenutype(12);
      setmenuname("??????_???????????????&??????");
      setmenuprice(note_babyethiandbokthi);
      setmenuid(1218);
    } else if (ispouch_babyethiandbokthi) {
      setmenutype(12);
      setmenuname("?????????_???????????????&??????");
      setmenuprice(pouch_babyethiandbokthi);
      setmenuid(1219);
    } else if (isremovablesticker_babybokthi) {
      setmenutype(12);
      setmenuname("?????????????????????_???????????????");
      setmenuprice(removablesticker_babybokthi);
      setmenuid(1220);
    } else if (isremovablesticker_babyethi) {
      setmenutype(12);
      setmenuname("?????????????????????_???????????????");
      setmenuprice(removablesticker_babyethi);
      setmenuid(1221);
    } else if (isremovablesticker_babyethiandbokthi) {
      setmenutype(12);
      setmenuname("?????????????????????_???????????????&??????");
      setmenuprice(removablesticker_babyethiandbokthi);
      setmenuid(1222);
    } else if (isreusabletubler_pink) {
      setmenutype(12);
      setmenuname("?????????????????????(??????)");
      setmenuprice(reusabletubler_pink);
      setmenuid(1223);
    } else if (isreusabletubler_white) {
      setmenutype(12);
      setmenuname("?????????????????????(?????????)");
      setmenuprice(reusabletubler_white);
      setmenuid(1224);
    } else if (issmarttok_babyethi) {
      setmenutype(12);
      setmenuname("????????????_???????????????");
      setmenuprice(smarttok_babyethi);
      setmenuid(1225);
    } else if (issmarttok_babybokthi) {
      setmenutype(12);
      setmenuname("????????????_???????????????");
      setmenuprice(smarttok_babybokthi);
      setmenuid(1226);
    } else {
      alert("problem while setting types");
    }
  }, []);
  /////////////////////////////////

  useEffect(() => {
    if (ismodalexit) {
      //setmenuname("something wrong");
      //setmenuprice(0);
      //setmenutype(0);
      //setmenuid(0);
      //??????1);?????????2);??????3);??????4);????????????5);??????&??????6);??????&?????????7);?????????&????????????8);???&?????????9);?????????10);?????????11);MD12
      Settiramisufalse();
      Settiramisustrawberryfalse();
      Sethazelnutchocolatecakefalse();
      Setcarrotcakefalse();
      Setburntcheesecakefalse();
      Setoreomilkcakefalse();
      Setcoffeeanddonutsetfalse();
      Setcoffeeandonionbagelsetfalse();
      Setcoffeeandplainbagelsetfalse();
      Setquattrocheesegrilledpaninisetfalse();
      Sethamcheessmuffinsetfalse();
      Setpeperonigrilledcheesepaninisetfalse();
      Sethotchickengrilledpaninisetfalse();
      Setmacaronsetplusfalse();
      Setamericanofalse();
      Setbanaricanofalse();
      Setcafelattefalse();
      Setcinnamonlattefalse();
      Setcoldbrewfalse();
      Setcondensedlattefalse();
      Setcreamylattefalse();
      Setdolcecoldbrewfalse();
      Setespressofalse();
      Sethoneyamericanofalse();
      Setmilkcaramelmacciatofalse();
      Setpistachiocafelattefalse();
      Setsignatureamericanofalse();
      Setsignaturecoldbrewfalse();
      Setvanillacoldbrewfalse();
      Setvanillalattefalse();
      Setdecafamericanofalse();
      Setdecafbanaricanofalse();
      Setdecafcafelattefalse();
      Setdecafcinnamonlattefalse();
      Setdecafcondensedfalse();
      Setdecafcreamylattefalse();
      Setdecafespressofalse();
      Setdecafhoneyamericanofalse();
      Setdecafmilkcaramelmacciatofalse();
      Setdecafpistachiofalse();
      Setdecafvanillalattefalse();
      Setblacksugarbubbleteafalse();
      Setblacksugarmilkteafalse();
      Setchaimilkteafalse();
      Setclassicmilkteafalse();
      Setdalgonalattefalse();
      Setearlgreybubbleteafalse();
      Setearlgreymilkteafalse();
      Setgreentealattefalse();
      Setoatmeallattefalse();
      Setpistachiolattefalse();
      Setrealchocofalse();
      Setrealvanillabeanfalse();
      Setripepersimmonlattefalse();
      Setroyalmilkteafalse();
      Setstrawberrylattefalse();
      Settoffeenutlattefalse();
      Setgoldmedalapplejuicefalse();
      Setgoldmedalsparklingfalse();
      Setmangojuicefalse();
      Setpeachyogurtdrinkfalse();
      Setperrierlemonfalse();
      Setperrierlimefalse();
      Setplainyogurtdrinkfalse();
      Setripepersimmonjuicefalse();
      Setstrawberrybananajuicefalse();
      Setstrawberryjuicefalse();
      Setstrawberryyogurtdrinkfalse();
      Settomatofreshjuicefalse();
      Setchocoshakefalse();
      Setcookieandcreambanaccinofalse();
      Setgreenteabanaccinofalse();
      Setjavachipbanaccinofalse();
      Setlemonstrawberrysmoothiefalse();
      Setlemonyogurtsmoothiefalse();
      Setmangosmoothiefalse();
      Setmintchocobanaccinofalse();
      Setstrawberrypeachsmoothiefalse();
      Setstrawberrysmoothiefalse();
      Setvanillashakefalse();
      Setchamomilelycheeteafalse();
      Setchamomilefalse();
      Setyujaappleteafalse();
      Setearlgreyfalse();
      Setgingerlemonteafalse();
      Setgrapefruitadefalse();
      Setgrapefruithibiscusteafalse();
      Setgreengrapeadefalse();
      Sethibiscusfalse();
      Sethoneygrapefruitteafalse();
      Sethoneylemonteafalse();
      Setjejugreentangerineteafalse();
      Setjujubeblackherbalteafalse();
      Setlemonadefalse();
      Setlemonpeppermintteafalse();
      Setmintyujapearteafalse();
      Setnewpeachicedteafalse();
      Setpeachadefalse();
      Setpearbellflowerrootteafalse();
      Setpeppermintfalse();
      Setclubsandwichfalse();
      Setcustarddonutfalse();
      Seteggbaconsandwichfalse();
      Sethamcheeseenglishmuffinfalse();
      Sethotchickengrilledpaninifalse();
      Setjalapenobulgogisandwichfalse();
      Setonionbagelfalse();
      Setpaulycreamcheesefalse();
      Setpeperonigrilledcheesepaninifalse();
      Setplainbagelfalse();
      Setquattrocheesegrilledpaninifalse();
      Settunasandwichfalse();
      Setalmondbonbonmacaronfalse();
      Setamericancookiefalse();
      Setchocochipcookiefalse();
      Setchocolatemacaronfalse();
      Setcookieandcreammacaronfalse();
      Setdessertshoppingbagfalse();
      Setgreenteawhitecookiefalse();
      Setinjeolmimacaronfalse();
      Setmarlenkacake_cocoafalse();
      Setmarlenkacake_walnutfalse();
      Setmilkmacaronfalse();
      Setmintchocomacaronfalse();
      Setraspberrymacaronfalse();
      Setvanillamacaronfalse();
      Setyellowcheesemacaronfalse();
      Setpoint_9900false();
      Setpoint_10000false();
      Setpoint_30000false();
      Setpoint_50000false();
      Setacrylkeyring_typeafalse();
      Setacrylkeyring_typebfalse();
      Setacrylkeyring_typecfalse();
      Setacrylkeyring_typedfalse();
      Setdripbag_blendfalse();
      Setethifacekeyringfalse();
      Setethimonitordollfalse();
      Setmaskingtape_babybokthifalse();
      Setmaskingtape_babyethifalse();
      Setmemopad_babybokthifalse();
      Setmemopad_babyethifalse();
      Setmousepad_babybokthifalse();
      Setmousepad_babyethifalse();
      Setnote_babyethiandbokthifalse();
      Setpouch_babyethiandbokthifalse();
      Setremovablesticker_babybokthifalse();
      Setremovablesticker_babyethifalse();
      Setremovablesticker_babyethiandbokthifalse();
      Setreusabletubler_pinkfalse();
      Setreusabletubler_whitefalse();
      Setsmarttok_babyethifalse();
      Setsmarttok_babybokthifalse();
      Setismodalexitfalse();
    }
  }, []);

  var showtype = -1;

  //no option
  if (
    menuid === 21 ||
    menuid === 22 ||
    menuid === 23 ||
    menuid === 24 ||
    menuid === 25 ||
    menuid === 26 ||
    menuid === 38 ||
    menuid === 71 ||
    menuid === 72 ||
    menuid === 75 ||
    menuid === 76 ||
    menuid === 101 ||
    menuid === 102 ||
    menuid === 103 ||
    menuid === 104 ||
    menuid === 105 ||
    menuid === 106 ||
    menuid === 107 ||
    menuid === 108 ||
    menuid === 109 ||
    menuid === 1010 ||
    menuid === 1011 ||
    menuid === 1012 ||
    menuid === 111 ||
    menuid === 112 ||
    menuid === 113 ||
    menuid === 114 ||
    menuid === 115 ||
    menuid === 116 ||
    menuid === 117 ||
    menuid === 118 ||
    menuid === 119 ||
    menuid === 1110 ||
    menuid === 1111 ||
    menuid === 1112 ||
    menuid === 1113 ||
    menuid === 1114 ||
    menuid === 1115 ||
    menuid === 121 ||
    menuid === 122 ||
    menuid === 123 ||
    menuid === 124 ||
    menuid === 125 ||
    menuid === 126 ||
    menuid === 127 ||
    menuid === 128 ||
    menuid === 129 ||
    menuid === 1210 ||
    menuid === 1211 ||
    menuid === 1212 ||
    menuid === 1213 ||
    menuid === 1214 ||
    menuid === 1215 ||
    menuid === 1216 ||
    menuid === 1217 ||
    menuid === 1218 ||
    menuid === 1219 ||
    menuid === 1220 ||
    menuid === 1221 ||
    menuid === 1222 ||
    menuid === 1223 ||
    menuid === 1224 ||
    menuid === 1225 ||
    menuid === 1226
  ) {
    showtype = 1;
  }
  //?????? ????????? ?????? ?????? ????????????(200???) ???????????????????????? ????????? ??????(??????) ????????? ??????(??????) ?????????????????????
  else if (
    menuid === 31 ||
    menuid === 32 ||
    menuid === 33 ||
    menuid === 34 ||
    menuid === 35 ||
    menuid === 36 ||
    menuid === 37
  ) {
    showtype = 2;
  }
  //?????? ????????? ?????? ?????? ???????????????????????? ?????????????????????
  else if (menuid === 41 || menuid === 51) {
    showtype = 3;
  }
  //????????????????????? ??????  ?????? ????????????(400???)
  else if (menuid === 42 || menuid === 52) {
    showtype = 4;
  }
  //?????? ????????? ?????? ????????????(200???) ??????????????? ???????????????????????? ?????????????????????
  else if (menuid === 43 || menuid === 53) {
    showtype = 5;
  }
  //?????? ?????? ????????????(200???) ?????? ??????????????? ????????? ????????????
  else if (menuid === 44 || menuid === 54 || menuid === 46 || menuid === 55) {
    showtype = 6;
  }
  //iced only ?????? ?????? ???????????????????????? ?????????????????????
  else if (menuid === 45) {
    showtype = 7;
  }
  //iced only ?????? ?????? ????????????(200???) ???????????? ???????????????????????? ?????????????????????
  else if (menuid === 47 || menuid === 56) {
    showtype = 8;
  }
  //iced only ?????? ??????????????? ????????????
  else if (menuid === 48) {
    showtype = 9;
  }
  //hot only ????????????(200???) ?????????
  else if (menuid === 49 || menuid === 57) {
    showtype = 10;
  }
  //?????? ????????? ?????? ?????? ????????????(200???) ??????
  else if (menuid === 410 || menuid === 58) {
    showtype = 11;
  }
  //?????? ?????? ???????????? ?????? ??????????????? ????????? ????????????
  else if (
    menuid === 411 ||
    menuid === 412 ||
    menuid === 416 ||
    menuid === 59 ||
    menuid === 510 ||
    menuid === 511
  ) {
    showtype = 12;
  }
  //?????? ????????? ?????? ?????? ???????????????????????? ?????????????????????
  else if (menuid === 413) {
    showtype = 13;
  }
  //iced only ?????? ?????? ???????????????????????? ?????????????????????
  else if (menuid === 414) {
    showtype = 14;
  }
  //iced only ?????? ??????????????? ????????????
  else if (menuid === 415) {
    showtype = 15;
  }
  //iced only ?????? ?????? ??????????????? ?????????
  else if (menuid === 61 || menuid === 62) {
    showtype = 16;
  }
  //?????? ???????????????
  else if (menuid === 63 || menuid === 64) {
    showtype = 17;
  }
  //?????? ?????? ??????????????? ????????? ???????????????
  else if (menuid === 65) {
    showtype = 18;
  }
  //iced only ?????? ?????? ??????????????? ?????????
  else if (menuid === 66) {
    showtype = 19;
  }
  //?????? ?????? ?????? ??????????????? ?????????
  else if (menuid === 67) {
    showtype = 20;
  }
  //?????? ?????? ?????? ??????????????? ????????? ????????????
  else if (menuid === 68 || menuid === 69 || menuid === 611 || menuid === 612) {
    showtype = 21;
  }
  //?????? ?????? ?????? ??????????????? ????????????
  else if (menuid === 610) {
    showtype = 22;
  }
  //iced only ??????
  else if (menuid === 613 || menuid === 73 || menuid === 78) {
    showtype = 23;
  }
  //???????????? ???????????????
  else if (menuid === 614) {
    showtype = 24;
  }
  //iced only ?????? ?????? ??????????????? ????????????
  else if (menuid === 615) {
    showtype = 25;
  }
  //???????????? ?????? ??????????????? ???????????? ????????? ????????????
  else if (menuid === 616) {
    showtype = 26;
  }
  //iced only
  else if (
    menuid === 74 ||
    menuid === 77 ||
    menuid === 79 ||
    menuid === 710 ||
    menuid === 711 ||
    menuid === 81 ||
    menuid === 85 ||
    menuid === 86 ||
    menuid === 87 ||
    menuid === 89 ||
    menuid === 810 ||
    menuid === 811
  ) {
    showtype = 27;
  }
  //iced only ?????? ????????????
  else if (menuid === 712) {
    showtype = 28;
  }
  //iced only ?????? ?????????
  else if (menuid === 82 || menuid === 83 || menuid === 84) {
    showtype = 29;
  }
  //iced only ?????? ??????????????? ?????????
  else if (menuid === 88) {
    showtype = 30;
  }
  //???????????? ??????
  else if (
    menuid === 91 ||
    menuid === 93 ||
    menuid === 95 ||
    menuid === 912 ||
    menuid === 913 ||
    menuid === 916 ||
    menuid === 919
  ) {
    showtype = 31;
  }
  //???????????? ??????
  else if (
    menuid === 92 ||
    menuid === 94 ||
    menuid === 97 ||
    menuid === 99 ||
    menuid === 915 ||
    menuid === 920
  ) {
    showtype = 32;
  }
  //iced only ?????? ??????
  else if (menuid === 96 || menuid === 98 || menuid === 914) {
    showtype = 33;
  }
  //???????????? ?????? ??????
  else if (menuid === 910 || menuid === 911) {
    showtype = 34;
  }
  //iced only ?????? ???????????? ?????????
  else if (menuid === 917) {
    showtype = 35;
  }
  //iced only ?????? ?????????
  else if (menuid === 918) {
    showtype = 36;
  } else {
    showtype = -1;
  }
  var showoption = [];
  if (showtype === 1) {
    //////////////no option//////////////////
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionitem();
          }}
        >
          +
        </Button>
        <Typography align="left">{optionitem}</Typography>
        <Button
          onClick={() => {
            decreaseoptionitem();
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 2) {
    //?????? ????????? ?????? ?????? ????????????(200???) ???????????????????????? ????????? ??????(??????) ????????? ??????(??????) ?????????????????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 3) {
    //?????? ????????? ?????? ?????? ???????????????????????? ?????????????????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 4) {
    //iced only ??????  ?????? ????????????(400???)
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 5) {
    //?????? ????????? ?????? ????????????(200???) ??????????????? ???????????????????????? ?????????????????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 6) {
    //?????? ?????? ????????????(200???) ?????? ??????????????? ????????? ????????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 7) {
    //iced only ?????? ?????? ???????????????????????? ?????????????????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 8) {
    //iced only ?????? ?????? ????????????(200???) ???????????? ???????????????????????? ?????????????????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 9) {
    //iced only ?????? ??????????????? ????????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 10) {
    //hot only ????????????(200???) ?????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 11) {
    //?????? ????????? ?????? ?????? ????????????(200???) ??????
    showoption.push(<div> </div>);
  } else if (showtype === 12) {
    //?????? ?????? ???????????? ?????? ??????????????? ????????? ????????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 13) {
    //?????? ????????? ?????? ?????? ???????????????????????? ?????????????????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 14) {
    //iced only ?????? ?????? ???????????????????????? ?????????????????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 15) {
    //iced only ?????? ??????????????? ????????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 16) {
    //iced only ?????? ?????? ??????????????? ?????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 17) {
    //?????? ???????????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 18) {
    //?????? ?????? ??????????????? ????????? ???????????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 19) {
    //iced only ?????? ?????? ??????????????? ?????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 20) {
    //?????? ?????? ?????? ??????????????? ?????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 21) {
    //?????? ?????? ?????? ??????????????? ????????? ????????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 22) {
    //?????? ?????? ?????? ??????????????? ????????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 23) {
    //iced only ??????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 24) {
    //???????????? ???????????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 25) {
    //iced only ?????? ?????? ??????????????? ????????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 26) {
    //???????????? ?????? ??????????????? ???????????? ????????? ????????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 27) {
    //iced only
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 28) {
    //iced only ?????? ????????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 29) {
    //iced only ?????? ?????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 30) {
    //iced only ?????? ??????????????? ?????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 31) {
    //???????????? ??????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 32) {
    //???????????? ??????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 33) {
    //iced only ?????? ??????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 34) {
    //???????????? ?????? ??????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">HOT : {optionhot}</Typography>
        <Button
          onClick={() => {
            decreaseoptionhot();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
        <div></div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 35) {
    //iced only ?????? ???????????? ?????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else if (showtype === 36) {
    //iced only ?????? ?????????
    showoption.push(
      <div>
        <Button
          onClick={() => {
            increaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          +
        </Button>
        <Typography align="left">ICED : {optioniced}</Typography>
        <Button
          onClick={() => {
            decreaseoptioniced();
            setcshowtype(showtype);
          }}
        >
          -
        </Button>
      </div>
    );
  } else {
  }

  function genstring(input) {
    var str = "";
    str = str.concat(
      "",
      input.ice == 1
        ? "????????????, "
        : input.ice == 2
        ? "????????????, "
        : input.ice == 3
        ? "????????????, "
        : ""
    );

    str = str.concat(
      "",
      input.water == 1 ? "????????????, " : input.water == 2 ? "????????????, " : ""
    );
    str = str.concat(
      "",
      input.sweet == 1 ? "?????????, " : input.sweet == 2 ? "????????????, " : ""
    );
    str = str.concat(
      "",
      input.shotamount == 1
        ? "?????????, "
        : input.shotamount == 2
        ? "?????????, "
        : ""
    );
    str = str.concat("", input.pulp == 1 ? "?????????????????????, " : "");
    str = str.concat("", input.soymilk == 1 ? "????????? ??????, " : "");
    str = str.concat("", input.whippedcream == 1 ? "????????????, " : "");
    str = str.concat("", input.excludesyrup == 1 ? "????????????, " : "");
    str = str.concat("", input.excludetopping == 1 ? "????????????, " : "");
    str = str.concat("", input.includedalgona == 1 ? "????????? ??????, " : "");
    str = str.concat(
      "",
      input.addhazelnutsyrup == 1 ? "???????????? ????????????, " : ""
    );
    str = str.concat(
      "",
      input.addcinnamonsyrup == 1 ? "????????? ????????????, " : ""
    );
    str = str.concat(
      "",
      input.changenormalintosignature == 1 ? "???????????? ????????????, " : ""
    );
    str = str.concat(
      "",
      input.changebanaintosignature == 1 ? "??????????????? ???????????? ????????????, " : ""
    );
    str = str.concat(
      "",
      input.changelatteorsoyfromset == 1
        ? "????????? ??????(??????), "
        : input.changelatteorsoyfromset == 2
        ? "????????? ??????(??????), "
        : ""
    );
    console.log("option string is");
    console.log(str);
    return str;
  } //valueoflist[i]
  function sumoption(input) {
    var sumtemp = 0;
    if (input.shotamount == 1) {
      sumtemp += 500;
    }
    if (input.whippedcream == 1) {
      sumtemp += 500;
    }
    if (input.includedalgona == 1) {
      sumtemp += 500;
    }
    if (input.addhazelnutsyrup == 1) {
      sumtemp += 500;
    }
    if (input.addcinnamonsyrup == 1) {
      sumtemp += 500;
    }
    if (input.changenormalintosignature == 1) {
      sumtemp += 200;
    }
    if (input.changebanaintosignature == 1) {
      sumtemp += 400;
    }
    if (input.changelatteorsoyfromset == 1) {
      sumtemp += 800;
    }
    if (input.changelatteorsoyfromset == 2) {
      sumtemp += 800;
    }

    return sumtemp;
  } //valueoflist[i]
  let i = 0;
  let j = 0;
  let temp = [];
  return (
    <div>
      <Card
        raised
        sx={{ margin: "0 auto", padding: "0px" }}
        style={{
          width: "90vw",
          height: "140vw",
          borderRadius: "16px",
          marginTop: "20px",
        }}
      >
        <Button
          onClick={() => {
            Setismodalexittrue();
            if (!ismodalexit) {
              setoptioniced(0);
              setoptionhot(0);
              hide(setoptionitem());
            }
          }}
        >
          ??????
        </Button>
        <Button
          onClick={() => {
            //????????????????????? ??????????????????;
            console.log("???????????????");
            if (showtype === 1) {
              temp = receipt;
              temp = [
                //receipt??? ?????????????????????(???????????????)
                ...temp,
                {
                  rmenuname: menuname,
                  rmenuprice: menuprice,
                  rmenutype: menutype,
                  rmenuid: menuid,
                  rmenuamount: optionitem,
                  ritemid: counter++,
                  ritemoptiondescription: "",
                  rtemperature: "",
                },
              ];
              console.log("current id = ".concat("", temp.ritemid));
              console.log("current temp state is ");
              console.log(temp);
              setreceipt(temp);
              var temp2 = 0; //??????????????????(?????????)
              for (i = 0; i < temp.length; i++) {
                temp2 += temp[i].rmenuprice * temp[i].rmenuamount;
                console.log("isNaN rmenuprice".concat("", isNaN(temp2)));
              }
              Setismodalexittrue();
              if (!ismodalexit) {
                hide(setoptionitem());
                console.log(temp2);
                setsum(sum + temp2);
                console.log("isNaN rmenuprice".concat("", isNaN(temp2)));
              }
            } else {
              console.log("????????????????????? ?????????");
              console.log("optionhot amount");
              console.log({ optionhot });
              console.log("optioniced amount");
              console.log({ optioniced });
              //////////////////////////////////////////////////////////////////???????????????????????????????????????
              //????????????, ??????????????? receipt??? ?????????. ?????????... ??? ?????? ??????????????????
              //?????? iced, hot??? ??????????????????.. accordion??? +-????????? ???????????? ,,
              //????????????.
              var temp2 = 0;
              console.log({ optioniced });

              temp = receipt;
              for (i = 0; i < optionhot; i++) {
                console.log("looping..");
                console.log(i);
                var optiondescription = genstring(valueoflist[i]);
                var optionsum = sumoption(valueoflist[i]);

                temp = [
                  //receipt??? ?????????????????????(???????????????)
                  ...temp,
                  {
                    rmenuname: menuname,
                    rmenuprice: menuprice + optionsum,
                    rmenutype: menutype,
                    rmenuid: menuid,
                    rmenuamount: 1,
                    ritemid: counter++,
                    ritemoptiondescription: optiondescription,
                    rtemperature: "HOT",
                  },
                ];

                console.log("current temp state is ");
                console.log(temp);
                temp2 += menuprice + optionsum;
                setsum(sum + temp2);
                console.log("isNaN rmenuprice".concat("", isNaN(temp2)));
                setreceipt(temp);
              }

              for (j = 0; j < optioniced; j++) {
                console.log("looping");
                console.log(j);
                var optiondescription = genstring(valueoflist[j + 25]);
                var optionsum = sumoption(valueoflist[j + 25]);

                temp = [
                  //receipt??? ?????????????????????(???????????????)
                  ...temp,
                  {
                    rmenuname: menuname,
                    rmenuprice: menuprice + optionsum,
                    rmenutype: menutype,
                    rmenuid: menuid,
                    rmenuamount: 1,
                    ritemid: counter++,
                    ritemoptiondescription: optiondescription,
                    rtemperature: "ICED",
                  },
                ];
                console.log("current temp state is ");
                console.log(temp);
                console.log(temp.ritemoptiondescription);
                temp2 += menuprice + optionsum;
                console.log("isNaN rmenuprice".concat("", isNaN(temp2)));
                setsum(sum + temp2);
                setreceipt(temp);
              }
              console.log("loop ended.");
              Setismodalexittrue();
              if (!ismodalexit) {
                hide(setoptionitem());
                console.log(temp2);

                setoptioniced(0);
                setoptionhot(0);
                ///////////////////////????????? hot iced ????????? ???!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                console.log("receiptchecker");
                console.log(receipt);

                var vl = [];
                for (var k = 0; k < 51; k++) {
                  //???25???????????? ???.
                  vl.push({
                    id: k,
                    ice: "0", //?????? 0 ????????????1 ????????????2 ????????????3
                    water: "0", //??????0 ????????????1 ????????????2
                    sweet: "0", //??????0 ?????????1 ????????????2
                    shotamount: "0", //??????0 ????????? 1,(500???) ?????????2
                    pulp: "0", //??????0,????????????1
                    soymilk: "0", //?????? 0???????????????(????????????) 1
                    whippedcream: "0", //????????????: ?????? 0 ????????????1 500???
                    excludesyrup: "0", //??????0 ????????????1
                    excludetopping: "0", //?????? 0 ????????????1
                    includedalgona: "0", //?????? 0 ???????????????1(500???)
                    addhazelnutsyrup: "0", //?????? 0 ????????????????????????1(500???)
                    addcinnamonsyrup: "0", //?????? 0 ?????????????????????1(500???)
                    changenormalintosignature: "0", //?????? 0 ????????????1(200)
                    changebanaintosignature: "0", //?????? 0 ????????????1(???????????????400)
                    changelatteorsoyfromset: "0", //?????? 0 ????????? ??????1 2???????????????(?????????800)
                  });
                }

                setvalueoflist(vl);
                var vl = [];
              }
            }
          }}
        >
          ??????
        </Button>

        <CardContent sx={{ padding: "0px" }}></CardContent>
        <Typography align="center">{menuname}</Typography>
        <Typography align="center">{menuprice}</Typography>

        {showoption[0]}

        <CustomizedAccordions></CustomizedAccordions>
      </Card>
    </div>
  );
}

export default React.memo(Modalboxdesign);
