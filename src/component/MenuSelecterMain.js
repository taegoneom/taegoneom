import React, { useState } from "react";
import zustand from "zustand";
import { MenuStatus } from "./MenuViewStatus";
import { OptionOfMenu } from "./OptionStatus";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { show, hide } from "react-functional-modal";
import Modalboxdesign from "./Modalboxdesign";
import { MenuPriceStatus } from "./PriceStatus";
import { AppViewStatus } from "./ViewStatus";
import { CustomOptions } from "./Orderdata";
import { devtools } from "zustand/middleware";

function MenuSelecterMain() {
  const { receipt, sumparser, setsumparser } = CustomOptions();
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
    Setdessertshoppingbagtrue,
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
  } = OptionOfMenu();

  function optionaction() {
    show(
      <div>
        <Modalboxdesign> </Modalboxdesign>
      </div>
    );
  }
  const {
    valueofmenu,
    SetSuggest,
    SetPopular,
    SetNewMenu,
    SetComboMenu,
    SetCoffee,
    SetDecaf,
    SetMilk,
    SetJuiceDrink,
    SetSmoothie,
    SetTeaAde,
    SetBread,
    SetDessert,
    SetMD,
  } = MenuStatus();

  const { value } = AppViewStatus();

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

  let vh = window.innerHeight * 0.01;
  let vw = window.innerWidth * 0.01;

  return (
    <div
      style={{ overflow: "scroll", width: window.innerWidth, height: "70vh" }}
    >
      {valueofmenu === 1 ? (
        <div style={{ display: valueofmenu === 1 ? "block" : "none" }}>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignContent={"space-between"}
          >
            <Grid item xs={4}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/suggest/strawberryyogurtdrink.png"
                  onClick={() => {
                    Setstrawberryyogurtdrinktrue();
                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />

                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????????????????</Typography>
                  <Typography align="center">
                    {strawberryyogurtdrink}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/suggest/raspberrymacaron.png"
                  onClick={() => {
                    Setraspberrymacarontrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????????????????</Typography>
                  <Typography align="center">{raspberrymacaron}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/suggest/peachyogurtdrink.png"
                  onClick={() => {
                    Setpeachyogurtdrinktrue();
                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????????????????</Typography>
                  <Typography align="center">{peachyogurtdrink}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={4}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/suggest/newpeachicedtea.png"
                  onClick={() => {
                    Setnewpeachicedteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />

                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">NEW?????????????????????</Typography>
                  <Typography align="center">{newpeachicedtea}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/suggest/jejugreentangerinetea.png"
                  onClick={() => {
                    Setjejugreentangerineteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">
                    {jejugreentangerinetea}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/suggest/honeylemontea.png"
                  onClick={() => {
                    Sethoneylemonteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{honeylemontea}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={4}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/suggest/almondbonbonmacaron.png"
                  onClick={() => {
                    Setalmondbonbonmacarontrue();
                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????????????????</Typography>
                  <Typography align="center">
                    {almondbonbonmacaron}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image={
                    value === 3
                      ? "menuimages/coffee/americano.png"
                      : "menuimages/suggest/banaricano.png"
                  }
                  onClick={() => {
                    value === 3 ? Setamericanotrue() : Setbanaricanotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">
                    {value === 3 ? "???????????????" : "???????????????"}
                  </Typography>
                  <Typography align="center">
                    {value === 3 ? americano : banaricano}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/suggest/honeygrapefruittea.png"
                  onClick={() => {
                    Sethoneygrapefruitteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{honeygrapefruittea}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}

      {valueofmenu === 2 ? (
        <div style={{ display: valueofmenu === 2 ? "block" : "none" }}>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/cake/tiramisu.png"
                  onClick={() => {
                    Settiramisutrue();
                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????</Typography>
                  <Typography align="center">{tiramisu}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/cake/burntcheesecake.png"
                  onClick={() => {
                    Setburntcheesecaketrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">?????????????????????</Typography>
                  <Typography align="center">{burntcheesecake}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/cake/carrotcake.png"
                  onClick={() => {
                    Setcarrotcaketrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{carrotcake}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/cake/hazelnutchocolatecake.png"
                  onClick={() => {
                    Sethazelnutchocolatecaketrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography
                    align="center"
                    sx={{ margin: "0%", padding: "0%" }}
                  >
                    ??????????????????????????????
                  </Typography>
                  <Typography align="center">
                    {hazelnutchocolatecake}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/cake/oreomilkcake.png"
                  onClick={() => {
                    Setoreomilkcaketrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????????????????</Typography>
                  <Typography align="center">{oreomilkcake}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/cake/strawberrytiramisu.png"
                  onClick={() => {
                    Settiramisustrawberrytrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????????????????</Typography>
                  <Typography align="center">{tiramisustrawberry}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}

      {valueofmenu === 3 ? (
        <div style={{ display: valueofmenu === 3 ? "block" : "none" }}></div>
      ) : (
        <p></p>
      )}

      {valueofmenu === 4 ? (
        <div style={{ display: valueofmenu === 4 ? "block" : "none" }}>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/setmenu/coffeedonutset.png"
                  onClick={() => {
                    Setcoffeeanddonutsettrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????&????????????</Typography>
                  <Typography align="center">{coffeeanddonutset}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/setmenu/coffeeonionbagelset.png"
                  onClick={() => {
                    Setcoffeeandonionbagelsettrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????&????????????????????????</Typography>
                  <Typography align="center">
                    {coffeeandonionbagelset}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/setmenu/coffeeplainbagelset.png"
                  onClick={() => {
                    Setcoffeeandplainbagelsettrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????&????????????????????????</Typography>
                  <Typography align="center">
                    {coffeeandplainbagelset}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/setmenu/cuatrocheesegrilledpaniniset.png"
                  onClick={() => {
                    Setquattrocheesegrilledpaninisettrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">
                    ????????????????????????????????? ??????
                  </Typography>
                  <Typography align="center">
                    {quattrocheesegrilledpaniniset}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/setmenu/hamcheesemuffinset.png"
                  onClick={() => {
                    Sethamcheessmuffinsettrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">?????????????????????</Typography>
                  <Typography align="center">{hamcheessmuffinset}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/setmenu/pepperonigrilledcheesepaniniset.png"
                  onClick={() => {
                    Setpeperonigrilledcheesepaninisettrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">
                    ???????????????????????????????????? ??????
                  </Typography>
                  <Typography align="center">
                    {peperonigrilledcheesepaniniset}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/setmenu/hotchickengrilledcheesepaniniset.png"
                  onClick={() => {
                    Sethotchickengrilledpaninisettrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">
                    ????????????????????????????????? ??????
                  </Typography>
                  <Typography align="center">
                    {hotchickengrilledpaniniset}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/setmenu/macaronset(8+1).png"
                  onClick={() => {
                    Setmacaronsetplustrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????8+1</Typography>
                  <Typography align="center">{macaronset8plus1}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}

      {valueofmenu === 5 ? (
        <div style={{ display: valueofmenu === 5 ? "block" : "none" }}>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/americano.png"
                  onClick={() => {
                    Setamericanotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{americano}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/banaricano.png"
                  onClick={() => {
                    Setbanaricanotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{banaricano}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/cafelatte.png"
                  onClick={() => {
                    Setcafelattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????</Typography>
                  <Typography align="center">{cafelatte}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/cinnamonlatte.png"
                  onClick={() => {
                    Setcinnamonlattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{cinnamonlatte}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/coldbrew.png"
                  onClick={() => {
                    Setcoldbrewtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????</Typography>
                  <Typography align="center">{coldbrew}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/condensedmilkcafelatte.png"
                  onClick={() => {
                    Setcondensedlattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????</Typography>
                  <Typography align="center">{condensedlatte}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/creamylatte.png"
                  onClick={() => {
                    Setcreamylattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{creamylatte}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/dolcecoldbrew.png"
                  onClick={() => {
                    Setdolcecoldbrewtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">?????? ????????????</Typography>
                  <Typography align="center">{dolcecoldbrew}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/espresso.png"
                  onClick={() => {
                    Setespressotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{espresso}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/honeyamericano.png"
                  onClick={() => {
                    Sethoneyamericanotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">?????????????????????</Typography>
                  <Typography align="center">{honeyamericano}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/milkcaramelmacchiato.png"
                  onClick={() => {
                    Setmilkcaramelmacciatotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????????????????</Typography>
                  <Typography align="center">
                    {milkcaramelmacciato}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/pistachiocafelatte.png"
                  onClick={() => {
                    Setpistachiocafelattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????????????????</Typography>
                  <Typography align="center">{pistachiocafelatte}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/signatureamericano.png"
                  onClick={() => {
                    Setsignatureamericanotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????????????????</Typography>
                  <Typography align="center">{signatureamericano}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/signaturecoldbrew.png"
                  onClick={() => {
                    Setsignaturecoldbrewtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????????????????</Typography>
                  <Typography align="center">{signaturecoldbrew}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/vanillacoldbrew.png"
                  onClick={() => {
                    Setvanillacoldbrewtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????? ????????????</Typography>
                  <Typography align="center">{vanillacoldbrew}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/coffee/vanillalatte.png"
                  onClick={() => {
                    Setvanillalattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{vanillalatte}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}

      {valueofmenu === 6 ? (
        <div style={{ display: valueofmenu === 6 ? "block" : "none" }}>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/decaf/decafamericano.png"
                  onClick={() => {
                    Setdecafamericanotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????? ???????????????</Typography>
                  <Typography align="center">{decafamericano}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/decaf/decafbanaricano.png"
                  onClick={() => {
                    Setdecafbanaricanotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????? ???????????????</Typography>
                  <Typography align="center">{decafbanaricano}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/decaf/decafcafelatte.png"
                  onClick={() => {
                    Setdecafcafelattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????? ????????????</Typography>
                  <Typography align="center">{decafcafelatte}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/decaf/decafcinnamonlatte.png"
                  onClick={() => {
                    Setdecafcinnamonlattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????? ???????????????</Typography>
                  <Typography align="center">{decafcinnamonlatte}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/decaf/decafcondensedmilkcafelatte.png"
                  onClick={() => {
                    Setdecafcondensedtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????? ????????????</Typography>
                  <Typography align="center">{decafcondensed}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/decaf/decafcreamylatte.png"
                  onClick={() => {
                    Setdecafcreamylattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????? ???????????????</Typography>
                  <Typography align="center">{decafcreamylatte}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/decaf/decafespresso.png"
                  onClick={() => {
                    Setdecafespressotrue();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????? ???????????????</Typography>
                  <Typography align="center">{decafespresso}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/decaf/decafhoneyamericano.png"
                  onClick={() => {
                    Setdecafhoneyamericanotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">
                    ???????????? ?????????????????????
                  </Typography>
                  <Typography align="center">
                    {decafhoneyamericano}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/decaf/decafmilkcaramelmacchiato.png"
                  onClick={() => {
                    Setdecafmilkcaramelmacciatotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">
                    ???????????? ???????????????????????????
                  </Typography>
                  <Typography align="center">
                    {decafmilkcaramelmacciato}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/decaf/decafpistachiocafelatte.png"
                  onClick={() => {
                    Setdecafpistachiotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">
                    ???????????? ???????????????????????????
                  </Typography>
                  <Typography align="center">{decafpistachio}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/decaf/decafvanillalatte.png"
                  onClick={() => {
                    Setdecafvanillalattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????? ???????????????</Typography>
                  <Typography align="center">{decafvanillalatte}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}

      {valueofmenu === 7 ? (
        <div style={{ display: valueofmenu === 7 ? "block" : "none" }}>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/blacksugarbubbletea.png"
                  onClick={() => {
                    Setblacksugarbubbleteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">
                    {blacksugarbubbletea}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/blacksugarmilktea.png"
                  onClick={() => {}}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{blacksugarmilktea}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/chaimilktea.png"
                  onClick={() => {
                    Setchaimilkteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{chaimilktea}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/classicmilktea.png"
                  onClick={() => {
                    Setclassicmilkteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????????????????</Typography>
                  <Typography align="center">{classicmilktea}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/dalgonalatte.png"
                  onClick={() => {
                    Setdalgonalattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{dalgonalatte}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/earlgreybubbletea.png"
                  onClick={() => {
                    Setearlgreybubbleteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">?????????????????????</Typography>
                  <Typography align="center">{earlgreybubbletea}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/earlgreymilktea.png"
                  onClick={() => {
                    Setearlgreymilkteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">?????????????????????</Typography>
                  <Typography align="center">{earlgreymilktea}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/greentealatte.png"
                  onClick={() => {
                    Setgreentealattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????</Typography>
                  <Typography align="center">{greentealatte}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/oatmeallatte.png"
                  onClick={() => {
                    Setoatmeallattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{oatmeallatte}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/pistachiolatte.png"
                  onClick={() => {
                    Setpistachiolattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">?????????????????????</Typography>
                  <Typography align="center">{pistachiolatte}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/realchoco.png"
                  onClick={() => {
                    Setrealchocotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????</Typography>
                  <Typography align="center">{realchoco}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/realvanillabean.png"
                  onClick={() => {
                    Setrealvanillabeantrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????????????????</Typography>
                  <Typography align="center">{realvanillabean}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/ripepersimmonlatte.png"
                  onClick={() => {
                    Setripepersimmonlattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????</Typography>
                  <Typography align="center">{ripepersimmonlatte}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/royalmilktea.png"
                  onClick={() => {
                    Setroyalmilkteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{royalmilktea}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/strawberrylatte.png"
                  onClick={() => {
                    Setstrawberrylattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????</Typography>
                  <Typography align="center">{strawberrylatte}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/milktea_latte/toffeenutlatte.png"
                  onClick={() => {
                    Settoffeenutlattetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{toffeenutlatte}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}

      {valueofmenu === 8 ? (
        <div style={{ display: valueofmenu === 8 ? "block" : "none" }}>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/juicedrink/goldmedalapplejuice.png"
                  onClick={() => {
                    Setgoldmedalapplejuicetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????? ????????????</Typography>
                  <Typography align="center">
                    {goldmedalapplejuice}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/juicedrink/goldmedalapplesparkling.png"
                  onClick={() => {
                    Setgoldmedalsparklingtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????? ??????????????????</Typography>
                  <Typography align="center">{goldmedalsparkling}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/juicedrink/mangojuice.png"
                  onClick={() => {
                    Setmangojuicetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????</Typography>
                  <Typography align="center">{mangojuice}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/juicedrink/peachyogurtdrink.png"
                  onClick={() => {
                    Setpeachyogurtdrinktrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????????????????</Typography>
                  <Typography align="center">{peachyogurtdrink}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/juicedrink/perrierlemon.png"
                  onClick={() => {
                    Setperrierlemontrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{perrierlemon}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/juicedrink/perrierlime.png"
                  onClick={() => {
                    Setperrierlimetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{perrierlime}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/juicedrink/plainyogurtdrink.png"
                  onClick={() => {
                    Setplainyogurtdrinktrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????????????????</Typography>
                  <Typography align="center">{plainyogurtdrink}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/juicedrink/ripepersimmonjuice.png"
                  onClick={() => {
                    Setripepersimmonjuicetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????</Typography>
                  <Typography align="center">{ripepersimmonjuice}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/juicedrink/strawberrybananajuice.png"
                  onClick={() => {
                    Setstrawberrybananajuicetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">?????????????????????</Typography>
                  <Typography align="center">
                    {strawberrybananajuice}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/juicedrink/strawberryjuice.png"
                  onClick={() => {
                    Setstrawberryjuicetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????</Typography>
                  <Typography align="center">{strawberryjuice}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/juicedrink/strawberryyogurtdrink.png"
                  onClick={() => {
                    Setstrawberryyogurtdrinktrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????????????????</Typography>
                  <Typography align="center">
                    {strawberryyogurtdrink}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/juicedrink/tomatofreshjuice.png"
                  onClick={() => {
                    Settomatofreshjuicetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????????????????</Typography>
                  <Typography align="center">{tomatofreshjuice}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}

      {valueofmenu === 9 ? (
        <div style={{ display: valueofmenu === 9 ? "block" : "none" }}>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/banaccino_smoothie/chocoshake.png"
                  onClick={() => {
                    Setchocoshaketrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{chocoshake}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/banaccino_smoothie/cookie&creambanaccino.png"
                  onClick={() => {
                    Setcookieandcreambanaccinotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">?????????????????????</Typography>
                  <Typography align="center">
                    {cookieandcreambanaccino}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/banaccino_smoothie/greenteabanaccino.png"
                  onClick={() => {
                    Setgreenteabanaccinotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????????????????</Typography>
                  <Typography align="center">{greenteabanaccino}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/banaccino_smoothie/javachipbanaccino.png"
                  onClick={() => {
                    Setjavachipbanaccinotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">?????????????????????</Typography>
                  <Typography align="center">{javachipbanaccino}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/banaccino_smoothie/lemonstrawberrysmoothie.png"
                  onClick={() => {
                    Setlemonstrawberrysmoothietrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">?????????????????????</Typography>
                  <Typography align="center">
                    {lemonstrawberrysmoothie}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/banaccino_smoothie/lemonyogurtsmoothie.png"
                  onClick={() => {
                    Setlemonyogurtsmoothietrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????????????????</Typography>
                  <Typography align="center">
                    {lemonyogurtsmoothie}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/banaccino_smoothie/mangosmoothie.png"
                  onClick={() => {
                    Setmangosmoothietrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{mangosmoothie}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/banaccino_smoothie/mintchocolatebanaccino.png"
                  onClick={() => {
                    Setmintchocobanaccinotrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????????????????</Typography>
                  <Typography align="center">{mintchocobanaccino}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/banaccino_smoothie/strawberrypeachsmoothie.png"
                  onClick={() => {
                    Setstrawberrypeachsmoothietrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????????????????</Typography>
                  <Typography align="center">
                    {strawberrypeachsmoothie}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/banaccino_smoothie/strawberrysmoothie.png"
                  onClick={() => {
                    Setstrawberrysmoothietrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{strawberrysmoothie}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/banaccino_smoothie/vanillashake.png"
                  onClick={() => {
                    Setvanillashaketrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????????????????</Typography>
                  <Typography align="center">{vanillashake}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}

      {valueofmenu === 10 ? (
        <div style={{ display: valueofmenu === 10 ? "block" : "none" }}>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/chamomilelycheetea.png"
                  onClick={() => {
                    Setchamomilelycheeteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">?????????????????????</Typography>
                  <Typography align="center">{chamomilelycheetea}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/chamomiletea.png"
                  onClick={() => {
                    Setchamomiletrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????</Typography>
                  <Typography align="center">{chamomile}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/citronappletea.png"
                  onClick={() => {
                    Setyujaappleteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{yujaappletea}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/earlgreytea.png"
                  onClick={() => {
                    Setearlgreytrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????</Typography>
                  <Typography align="center">{earlgrey}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/gingerlemontea.png"
                  onClick={() => {
                    Setgingerlemonteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{gingerlemontea}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/grapefruitade.png"
                  onClick={() => {
                    Setgrapefruitadetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{grapefruitade}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/grapefruithibiscustea.png"
                  onClick={() => {
                    Setgrapefruithibiscusteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????????????????</Typography>
                  <Typography align="center">
                    {grapefruithibiscustea}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/greengrapeade.png"
                  onClick={() => {
                    Setgreengrapeadetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????????????????</Typography>
                  <Typography align="center">{greengrapeade}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/hibiscustea.png"
                  onClick={() => {
                    Sethibiscustrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{hibiscus}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/honeygrapefruittea.png"
                  onClick={() => {
                    Sethoneygrapefruitteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{honeygrapefruittea}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/honeylemontea.png"
                  onClick={() => {
                    Sethoneylemonteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{honeylemontea}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/jejugreentangerinetea.png"
                  onClick={() => {
                    Setjejugreentangerineteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">
                    {jejugreentangerinetea}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/jujubeblackherbaltea.png"
                  onClick={() => {
                    Setjujubeblackherbalteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">
                    {jujubeblackherbaltea}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/lemonade.png"
                  onClick={() => {
                    Setlemonadetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{lemonade}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/lemonpepperminttea.png"
                  onClick={() => {
                    Setlemonpeppermintteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">?????????????????????</Typography>
                  <Typography align="center">{lemonpepperminttea}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/mintyujapeartea.png"
                  onClick={() => {
                    Setmintyujapearteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">?????????????????????</Typography>
                  <Typography align="center">{mintyujapeartea}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/newpeachicedtea.png"
                  onClick={() => {
                    Setnewpeachicedteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">NEW?????????????????????</Typography>
                  <Typography align="center">{newpeachicedtea}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/peachade.png"
                  onClick={() => {
                    Setpeachadetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????????????????</Typography>
                  <Typography align="center">{peachade}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/pearbellflowerroottea.png"
                  onClick={() => {
                    Setpearbellflowerrootteatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">
                    {pearbellflowerroottea}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/tea_ade/peppermint tea.png"
                  onClick={() => {
                    Setpepperminttrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????</Typography>
                  <Typography align="center">{peppermint}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}

      {valueofmenu === 11 ? (
        <div style={{ display: valueofmenu === 11 ? "block" : "none" }}>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/bread/clubsandwich.png"
                  onClick={() => {
                    Setclubsandwichtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????????????????</Typography>
                  <Typography align="center">{clubsandwich}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/bread/custarddonut.png"
                  onClick={() => {
                    Setcustarddonuttrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????????????????</Typography>
                  <Typography align="center">{custarddonut}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/bread/eggbaconsandwich.png"
                  onClick={() => {
                    Seteggbaconsandwichtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????????????????</Typography>
                  <Typography align="center">{eggbaconsandwich}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/bread/hamcheeseenglishmuffin.png"
                  onClick={() => {
                    Sethamcheeseenglishmuffintrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????????????????</Typography>
                  <Typography align="center">
                    {hamcheeseenglishmuffin}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/bread/hotchickengrilledcheesepanini.png"
                  onClick={() => {
                    Sethotchickengrilledpaninitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">?????????????????????????????????</Typography>
                  <Typography align="center">
                    {hotchickengrilledpanini}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/bread/jalapenobulgogisandwich.png"
                  onClick={() => {
                    Setjalapenobulgogisandwichtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">?????????????????????????????????</Typography>
                  <Typography align="center">
                    {jalapenobulgogisandwich}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/bread/onionbagel.png"
                  onClick={() => {
                    Setonionbageltrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????????????????</Typography>
                  <Typography align="center">{onionbagel}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/bread/paulycreamcheese.png"
                  onClick={() => {
                    Setpaulycreamcheesetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????????????????</Typography>
                  <Typography align="center">{paulycreamcheese}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/bread/peperonigrilledcheesepanini.png"
                  onClick={() => {
                    Setpeperonigrilledcheesepaninitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">
                    ????????????????????????????????????
                  </Typography>
                  <Typography align="center">
                    {peperonigrilledcheesepanini}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/bread/plainbagel.png"
                  onClick={() => {
                    Setplainbageltrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????????????????</Typography>
                  <Typography align="center">{plainbagel}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/bread/quatrocheesegrilledpanini.png"
                  onClick={() => {
                    Setquattrocheesegrilledpaninitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">?????????????????????????????????</Typography>
                  <Typography align="center">
                    {quattrocheesegrilledpanini}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/bread/tunasandwich.png"
                  onClick={() => {
                    Settunasandwichtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????????????????</Typography>
                  <Typography align="center">{tunasandwich}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}

      {valueofmenu === 12 ? (
        <div style={{ display: valueofmenu === 12 ? "block" : "none" }}>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/almondbonbonmacaron.png"
                  onClick={() => {
                    Setalmondbonbonmacarontrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????????????????</Typography>
                  <Typography align="center">
                    {almondbonbonmacaron}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/americancookie.png"
                  onClick={() => {
                    Setamericancookietrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????????????????</Typography>
                  <Typography align="center">{americancookie}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/chocochipcookie.png"
                  onClick={() => {
                    Setchocochipcookietrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{chocochipcookie}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/chocolatemacaron.png"
                  onClick={() => {
                    Setchocolatemacarontrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????????????????</Typography>
                  <Typography align="center">{chocolatemacaron}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/cookeandcreammacaron.png"
                  onClick={() => {
                    Setcookieandcreammacarontrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????????????????</Typography>
                  <Typography align="center">
                    {cookieandcreammacaron}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/dessertshoppingbag.png"
                  onClick={() => {
                    Setdessertshoppingbagtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????????????????</Typography>
                  <Typography align="center">{dessertshoppingbag}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/greenteawhitecookie.png"
                  onClick={() => {
                    Setgreenteawhitecookietrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">?????????????????????</Typography>
                  <Typography align="center">
                    {greenteawhitecookie}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/injeolmimacaron.png"
                  onClick={() => {
                    Setinjeolmimacarontrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????????????????</Typography>
                  <Typography align="center">{injeolmimacaron}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/marlenkacake(cocoa).png"
                  onClick={() => {
                    Setmarlenkacake_cocoatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????????????????(?????????)</Typography>
                  <Typography align="center">{marlenkacake_cocoa}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/marlenkacake(walnut).png"
                  onClick={() => {
                    Setmarlenkacake_walnuttrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????????????????(??????)</Typography>
                  <Typography align="center">
                    {marlenkacake_walnut}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/milkmacaron.png"
                  onClick={() => {
                    Setmilkmacarontrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????</Typography>
                  <Typography align="center">{milkmacaron}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/mintchocolatemacaron.png"
                  onClick={() => {
                    Setmintchocomacarontrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">?????????????????????</Typography>
                  <Typography align="center">{mintchocomacaron}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/raspberrymacaron.png"
                  onClick={() => {
                    Setraspberrymacarontrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????????????????</Typography>
                  <Typography align="center">{raspberrymacaron}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/vanillamacaron.png"
                  onClick={() => {
                    Setvanillamacarontrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????????????????</Typography>
                  <Typography align="center">{vanillamacaron}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/dessert/yellowcheesemacaron.png"
                  onClick={() => {
                    Setyellowcheesemacarontrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????????????????</Typography>
                  <Typography align="center">
                    {yellowcheesemacaron}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}

      {valueofmenu === 13 ? (
        <div style={{ display: valueofmenu === 13 ? "block" : "none" }}>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/9900point.png"
                  onClick={() => {
                    Setpoint_9900true();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">
                    ??????????????? ????????? 9,900??????
                  </Typography>
                  <Typography align="center">{point_9900}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/10000point.png"
                  onClick={() => {
                    Setpoint_10000true();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">
                    ??????????????? ????????? 1?????????
                  </Typography>
                  <Typography align="center">{point_10000}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/30000point.png"
                  onClick={() => {
                    Setpoint_30000true();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">
                    ??????????????? ????????? 3?????????
                  </Typography>
                  <Typography align="center">{point_30000}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/50000point.png"
                  onClick={() => {
                    Setpoint_50000true();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">
                    ??????????????? ????????? 5?????????
                  </Typography>
                  <Typography align="center">{point_50000}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/acrylickeyringatype.png"
                  onClick={() => {
                    Setacrylkeyring_typeatrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????_A??????</Typography>
                  <Typography align="center">{acrylkeyring_typea}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/acrylickeyringbtype.png"
                  onClick={() => {
                    Setacrylkeyring_typebtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????_B??????</Typography>
                  <Typography align="center">{acrylkeyring_typeb}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/acrylickeyringctype.png"
                  onClick={() => {
                    Setacrylkeyring_typectrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????_C??????</Typography>
                  <Typography align="center">{acrylkeyring_typec}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/acrylickeyringdtype.png"
                  onClick={() => {
                    Setacrylkeyring_typedtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????_D??????</Typography>
                  <Typography align="center">{acrylkeyring_typed}???</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/dripbagblend.png"
                  onClick={() => {
                    Setdripbag_blendtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">?????????(?????????)</Typography>
                  <Typography align="center">{dripbag_blend}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/ethifacekeyring.png"
                  onClick={() => {
                    Setethifacekeyringtrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????????????????</Typography>
                  <Typography align="center">{ethifacekeyring}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/ethimonitorplush.png"
                  onClick={() => {
                    Setethimonitordolltrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">?????????????????????</Typography>
                  <Typography align="center">{ethimonitordoll}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/maskingtapebabybokthi.png"
                  onClick={() => {
                    Setmaskingtape_babybokthitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">
                    ??????????????????_???????????????
                  </Typography>
                  <Typography align="center">
                    {maskingtape_babybokthi}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/maskingtapebabyethi.png"
                  onClick={() => {
                    Setmaskingtape_babyethitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">
                    ??????????????????_???????????????
                  </Typography>
                  <Typography align="center">
                    {maskingtape_babyethi}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/memopadbabybokthi.png"
                  onClick={() => {
                    Setmemopad_babybokthitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????_???????????????</Typography>
                  <Typography align="center">{memopad_babybokthi}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/memopadbabyethi.png"
                  onClick={() => {
                    Setmemopad_babyethitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????_???????????????</Typography>
                  <Typography align="center">{memopad_babyethi}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/mousepadbabybokthi.png"
                  onClick={() => {
                    Setmousepad_babybokthitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????_???????????????</Typography>
                  <Typography align="center">
                    {mousepad_babybokthi}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/mousepadbabyethi.png"
                  onClick={() => {
                    Setmousepad_babyethitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">???????????????_???????????????</Typography>
                  <Typography align="center">{mousepad_babyethi}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/notebabyethibokthi.png"
                  onClick={() => {
                    Setnote_babyethiandbokthitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">??????_???????????????&??????</Typography>
                  <Typography align="center">
                    {note_babyethiandbokthi}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/pouchbabyethibokthi.png"
                  onClick={() => {
                    Setpouch_babyethiandbokthitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">?????????_???????????????&??????</Typography>
                  <Typography align="center">
                    {pouch_babyethiandbokthi}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/removablestickerbabybokthi.png"
                  onClick={() => {
                    Setremovablesticker_babybokthitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">
                    ?????????????????????_???????????????
                  </Typography>
                  <Typography align="center">
                    {removablesticker_babybokthi}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/removablestickerbabyethi.png"
                  onClick={() => {
                    Setremovablesticker_babyethitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">
                    ?????????????????????_???????????????
                  </Typography>
                  <Typography align="center">
                    {removablesticker_babyethi}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/removablestickerbabyethibokthi.png"
                  onClick={() => {
                    Setremovablesticker_babyethiandbokthitrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">
                    ?????????????????????_???????????????&??????
                  </Typography>
                  <Typography align="center">
                    {removablesticker_babyethiandbokthi}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/reusabletumblerpink.png"
                  onClick={() => {
                    Setreusabletubler_pinktrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">?????????????????????(??????)</Typography>
                  <Typography align="center">
                    {reusabletubler_pink}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/reusabletumblerwhite.png"
                  onClick={() => {
                    Setreusabletubler_whitetrue();

                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">?????????????????????(?????????)</Typography>
                  <Typography align="center">
                    {reusabletubler_white}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            direction={"row"}
            spacing={0}
            alignItems={"flex-start"}
          >
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/smarttok_babyethi.png"
                  onClick={() => {
                    Setsmarttok_babyethitrue();
                    optionaction();
                  }}
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????_???????????????</Typography>
                  <Typography align="center">{smarttok_babyethi}???</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                raised
                sx={{ margin: "0 auto", padding: "0px" }}
                style={{
                  width: "24vw",
                  height: "23vh",
                  borderRadius: "16px",
                  marginTop: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="menuimages/md/smarttokbabybokthi.png"
                  onClick
                  sx={{ padding: "0px", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: "0px" }}>
                  <Typography align="center">????????????_???????????????</Typography>
                  <Typography align="center">
                    {smarttok_babybokthi}???
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default MenuSelecterMain;
