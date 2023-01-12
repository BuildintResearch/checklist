// firebase config here
const firebaseConfig = {
    apiKey: "AIzaSyCtFlIgLHOvliDQpsVW0YnZJZ7xVANICpk",
    authDomain: "checklist-379ea.firebaseapp.com",
    databaseURL: "https://checklist-379ea-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "checklist-379ea",
    storageBucket: "checklist-379ea.appspot.com",
    messagingSenderId: "248915298508",
    appId: "1:248915298508:web:4424f89a61e04ba9e75a69",
    measurementId: "G-YR85WETH2H"
  };
firebase.initializeApp(firebaseConfig);
let test_ref = firebase.database().ref("testing_report")

function hw_test(){
    mbsn = document.getElementById('mbsn').value
    currdate = document.getElementById('datetime').value
    wifiname = document.getElementById('wifiswitchname').value
    macid = document.getElementById('macid').value
    deviceid = document.getElementById('deviceid').value
    rplnh = document.getElementById('rplnh').value
    rpleh = document.getElementById('rpleh').value
    upslnh = document.getElementById('upslnh').value
    upsleh = document.getElementById('upsleh').value
    temph = document.getElementById('temph').value
    humidityh = document.getElementById('humidityh').value
    bvh = document.getElementById('bvh').value
    
    ac1wh = document.getElementById('ac1wh').value
    ac1ch = document.getElementById('ac1ch').value
    ac1kwhh = document.getElementById('ac1kwhh').value
    ac2wh = document.getElementById('ac2wh').value
    ac2ch = document.getElementById('ac2ch').value
    ac2kwhh = document.getElementById('ac2kwhh').value
    lobbywh = document.getElementById('lobbywh').value
    lobbych = document.getElementById('lobbych').value
    lobbykwhh = document.getElementById('lobbykwhh').value
    signagewh = document.getElementById('signagewh').value
    signagech = document.getElementById('signagech').value
    signagekwhh = document.getElementById('signagekwhh').value
    dvrwh = document.getElementById('dvrwh').value
    dvrch = document.getElementById('dvrch').value
    dvrkwhh = document.getElementById('dvrkwhh').value
    upswh = document.getElementById('upswh').value
    upsch = document.getElementById('upsch').value
    upskwhh = document.getElementById('upskwhh').value
    atmwh = document.getElementById('atmwh').value
    atmch = document.getElementById('atmch').value
    atmkwhh = document.getElementById('atmkwhh').value

    // checkboxes
    door = document.getElementById('doorh').checked
    wifi  = document.getElementById('wifih').checked
    star = document.getElementById('starh').checked
    beep = document.getElementById('beeph').checked
    presence = document.getElementById('presenceh').checked
    ac1store = document.getElementById('ac1storeh').checked
    ac2store = document.getElementById('ac2storeh').checked
    lobbystore = document.getElementById('lobbystoreh').checked
    signagestore = document.getElementById('signagestoreh').checked
    dvrstore = document.getElementById('dvrstoreh').checked
    upsstore = document.getElementById('upstoreh').checked
    atmstore = document.getElementById('atmstoreh').checked

    ac1relay = document.getElementById('ac1relayh').checked
    ac2relay = document.getElementById('ac2relayh').checked
    lobbyrelay = document.getElementById('lobbyrelayh').checked
    signagerelay = document.getElementById('signagerelayh').checked
    vsatrelay = document.getElementById('vsatrelayh').checked
    routerrelay = document.getElementById('routerrelayh').checked
    atmrelay = document.getElementById('atmrelayh').checked
    sparerelay = document.getElementById('sparerelayh').checked

    notes = document.getElementById('notesh').value
    testedby = document.getElementById('testbyh').value

    // push to firebase
    test_ref.child(mbsn).child('date').set(currdate)
    test_ref.child(mbsn).child('hw').child('wifiname').set(wifiname)
    test_ref.child(mbsn).child('hw').child('macid').set(macid)
    test_ref.child(mbsn).child('hw').child('deviceid').set(deviceid)
    test_ref.child(mbsn).child('hw').child('rpln').set(rplnh)
    test_ref.child(mbsn).child('hw').child('rple').set(rpleh)
    test_ref.child(mbsn).child('hw').child('upsln').set(upslnh)
    test_ref.child(mbsn).child('hw').child('upsle').set(upsleh)
    test_ref.child(mbsn).child('hw').child('temp').set(temph)
    test_ref.child(mbsn).child('hw').child('humidity').set(humidityh)
    test_ref.child(mbsn).child('hw').child('batteryvoltage').set(bvh)
    test_ref.child(mbsn).child('hw').child('door').set(door)
    test_ref.child(mbsn).child('hw').child('wifi').set(wifi)
    test_ref.child(mbsn).child('hw').child('star').set(star)
    test_ref.child(mbsn).child('hw').child('beep').set(beep)
    test_ref.child(mbsn).child('hw').child('presence').set(presence)

    test_ref.child(mbsn).child('hw').child('ac1').child('watts').set(ac1wh)
    test_ref.child(mbsn).child('hw').child('ac1').child('current').set(ac1ch)
    test_ref.child(mbsn).child('hw').child('ac1').child('kwh').set(ac1kwhh)
    test_ref.child(mbsn).child('hw').child('ac1').child('storing').set(ac1store)
    test_ref.child(mbsn).child('hw').child('ac2').child('watts').set(ac2wh)
    test_ref.child(mbsn).child('hw').child('ac2').child('current').set(ac2ch)
    test_ref.child(mbsn).child('hw').child('ac2').child('kwh').set(ac2kwhh)
    test_ref.child(mbsn).child('hw').child('ac2').child('storing').set(ac2store)
    test_ref.child(mbsn).child('hw').child('lobby').child('watts').set(lobbywh)
    test_ref.child(mbsn).child('hw').child('lobby').child('current').set(lobbych)
    test_ref.child(mbsn).child('hw').child('lobby').child('kwh').set(lobbykwhh)
    test_ref.child(mbsn).child('hw').child('lobby').child('storing').set(lobbystore)
    test_ref.child(mbsn).child('hw').child('signage').child('watts').set(signagewh)
    test_ref.child(mbsn).child('hw').child('signage').child('current').set(signagech)
    test_ref.child(mbsn).child('hw').child('signage').child('kwh').set(signagekwhh)
    test_ref.child(mbsn).child('hw').child('signage').child('storing').set(signagestore)
    test_ref.child(mbsn).child('hw').child('dvr').child('watts').set(dvrwh)
    test_ref.child(mbsn).child('hw').child('dvr').child('current').set(dvrch)
    test_ref.child(mbsn).child('hw').child('dvr').child('kwh').set(dvrkwhh)
    test_ref.child(mbsn).child('hw').child('dvr').child('storing').set(dvrstore)
    test_ref.child(mbsn).child('hw').child('ups').child('watts').set(upswh)
    test_ref.child(mbsn).child('hw').child('ups').child('current').set(upsch)
    test_ref.child(mbsn).child('hw').child('ups').child('kwh').set(upskwhh)
    test_ref.child(mbsn).child('hw').child('ups').child('storing').set(upsstore)
    test_ref.child(mbsn).child('hw').child('atm').child('watts').set(atmwh)
    test_ref.child(mbsn).child('hw').child('atm').child('current').set(atmch)
    test_ref.child(mbsn).child('hw').child('atm').child('kwh').set(atmkwhh)
    test_ref.child(mbsn).child('hw').child('atm').child('storing').set(atmstore)




    test_ref.child(mbsn).child('hw').child('relay').child('ac1').set(ac1relay)
    test_ref.child(mbsn).child('hw').child('relay').child('ac2').set(ac2relay)
    test_ref.child(mbsn).child('hw').child('relay').child('lobby').set(lobbyrelay)
    test_ref.child(mbsn).child('hw').child('relay').child('signage').set(signagerelay)
    test_ref.child(mbsn).child('hw').child('relay').child('vsat').set(vsatrelay)
    test_ref.child(mbsn).child('hw').child('relay').child('router').set(routerrelay)
    test_ref.child(mbsn).child('hw').child('relay').child('atm').set(atmrelay)
    test_ref.child(mbsn).child('hw').child('relay').child('spare').set(sparerelay)

    test_ref.child(mbsn).child('hw').child('notes').set(notes)
    test_ref.child(mbsn).child('hw').child('testedby').set(testedby)


}

function data_test(){
    mbsn1 = document.getElementById('mbsn1').value
    rplnd = document.getElementById('rplnd').value
    rpled = document.getElementById('rpled').value
    upslnd = document.getElementById('upslnd').value
    upsled = document.getElementById('upsled').value
    tempd = document.getElementById('tempd').value
    humidityd = document.getElementById('humidityd').value
    bvd = document.getElementById('bvd').value

    doord = document.getElementById('doord').checked
    wifid = document.getElementById('wifid').checked
    stard = document.getElementById('stard').checked
    presenced = document.getElementById('presenced').checked

    ac1wd = document.getElementById('ac1wd').value
    ac1cd = document.getElementById('ac1cd').value
    ac1kwhd = document.getElementById('ac1kwhd').value
    ac1stored = document.getElementById('ac1stored').value
    ac2wd = document.getElementById('ac2wd').value
    ac2cd = document.getElementById('ac2cd').value
    ac2kwhd = document.getElementById('ac2kwhd').value
    ac2stored = document.getElementById('ac2stored').value
    lobbywd = document.getElementById('lobbywd').value
    lobbycd = document.getElementById('lobbycd').value
    lobbykwhd = document.getElementById('lobbykwhd').value
    lobbystored = document.getElementById('lobbystored').value
    signagewd = document.getElementById('signagewd').value
    signagecd = document.getElementById('signagecd').value
    signagekwhd = document.getElementById('signagekwhd').value
    signagestored = document.getElementById('signagestored').value
    dvrwd = document.getElementById('dvrwd').value
    dvrcd = document.getElementById('dvrcd').value
    dvrkwhd = document.getElementById('dvrkwhd').value
    dvrstored = document.getElementById('dvrstored').value
    upswd = document.getElementById('upswd').value
    upscd = document.getElementById('upscd').value
    upskwhd = document.getElementById('upskwhd').value
    upstored = document.getElementById('upstored').value
    atmwd = document.getElementById('atmwd').value
    atmcd = document.getElementById('atmcd').value
    atmkwhd = document.getElementById('atmkwhd').value
    atmstored = document.getElementById('atmstored').value

    ac1relayd = document.getElementById('ac1relayd').checked
    ac2relayd = document.getElementById('ac2relayd').checked
    lobbyrelayd = document.getElementById('lobbyrelayd').checked
    signagerelayd = document.getElementById('signagerelayd').checked
    vsatrelayd = document.getElementById('vsatrelayd').checked
    routerrelayd = document.getElementById('routerrelayd').checked
    atmrelayd = document.getElementById('atmrelayd').checked
    sparerelayd = document.getElementById('sparerelayd').checked

    notesd = document.getElementById('notesd').value
    testedbyd = document.getElementById('testbyd').value


    // push to firebase     
    test_ref.child(mbsn1).child('data').child('rpln').set(rplnd)
    test_ref.child(mbsn1).child('data').child('rple').set(rpled)
    test_ref.child(mbsn1).child('data').child('upsln').set(upslnd)
    test_ref.child(mbsn1).child('data').child('upsle').set(upsled)
    test_ref.child(mbsn1).child('data').child('temp').set(tempd)
    test_ref.child(mbsn1).child('data').child('humidity').set(humidityd)
    test_ref.child(mbsn1).child('data').child('batteryvoltage').set(bvd)
    test_ref.child(mbsn1).child('data').child('door').set(doord)
    test_ref.child(mbsn1).child('data').child('wifi').set(wifid)
    test_ref.child(mbsn1).child('data').child('star').set(stard)
    test_ref.child(mbsn1).child('data').child('presence').set(presenced)

    test_ref.child(mbsn1).child('data').child('ac1').child('watts').set(ac1wd)
    test_ref.child(mbsn1).child('data').child('ac1').child('current').set(ac1cd)
    test_ref.child(mbsn1).child('data').child('ac1').child('kwh').set(ac1kwhd)
    test_ref.child(mbsn1).child('data').child('ac1').child('storing').set(ac1stored)
    test_ref.child(mbsn1).child('data').child('ac2').child('watts').set(ac2wd)
    test_ref.child(mbsn1).child('data').child('ac2').child('current').set(ac2cd)
    test_ref.child(mbsn1).child('data').child('ac2').child('kwh').set(ac2kwhd)
    test_ref.child(mbsn1).child('data').child('ac2').child('storing').set(ac2stored)
    test_ref.child(mbsn1).child('data').child('lobby').child('watts').set(lobbywd)
    test_ref.child(mbsn1).child('data').child('lobby').child('current').set(lobbycd)
    test_ref.child(mbsn1).child('data').child('lobby').child('kwh').set(lobbykwhd)
    test_ref.child(mbsn1).child('data').child('lobby').child('storing').set(lobbystored)
    test_ref.child(mbsn1).child('data').child('signage').child('watts').set(signagewd)
    test_ref.child(mbsn1).child('data').child('signage').child('current').set(signagecd)
    test_ref.child(mbsn1).child('data').child('signage').child('kwh').set(signagekwhd)
    test_ref.child(mbsn1).child('data').child('signage').child('storing').set(signagestored)
    test_ref.child(mbsn1).child('data').child('dvr').child('watts').set(dvrwd)
    test_ref.child(mbsn1).child('data').child('dvr').child('current').set(dvrcd)
    test_ref.child(mbsn1).child('data').child('dvr').child('kwh').set(dvrkwhd)
    test_ref.child(mbsn1).child('data').child('dvr').child('storing').set(dvrstored)
    test_ref.child(mbsn1).child('data').child('ups').child('watts').set(upswd)
    test_ref.child(mbsn1).child('data').child('ups').child('current').set(upscd)
    test_ref.child(mbsn1).child('data').child('ups').child('kwh').set(upskwhd)
    test_ref.child(mbsn1).child('data').child('ups').child('storing').set(upstored)
    test_ref.child(mbsn1).child('data').child('atm').child('watts').set(atmwd)
    test_ref.child(mbsn1).child('data').child('atm').child('current').set(atmcd)
    test_ref.child(mbsn1).child('data').child('atm').child('kwh').set(atmkwhd)
    test_ref.child(mbsn1).child('data').child('atm').child('storing').set(atmstored)

    test_ref.child(mbsn1).child('data').child('relay').child('ac1').set(ac1relayd)
    test_ref.child(mbsn1).child('data').child('relay').child('ac2').set(ac2relayd)
    test_ref.child(mbsn1).child('data').child('relay').child('lobby').set(lobbyrelayd)
    test_ref.child(mbsn1).child('data').child('relay').child('signage').set(signagerelayd)
    test_ref.child(mbsn1).child('data').child('relay').child('vsat').set(vsatrelayd)
    test_ref.child(mbsn1).child('data').child('relay').child('router').set(routerrelayd)
    test_ref.child(mbsn1).child('data').child('relay').child('atm').set(atmrelayd)
    test_ref.child(mbsn1).child('data').child('relay').child('spare').set(sparerelayd)
    
    test_ref.child(mbsn1).child('data').child('notes').child(notesd)
    test_ref.child(mbsn1).child('data').child('testedby').child(testedbyd)

}