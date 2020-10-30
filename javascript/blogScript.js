// value used later
var header = document.getElementById("intro")
var description = document.getElementById("description")
var image = document.getElementById("inputImage")
var nError = document.getElementById("nameErr")
var tError = document.getElementById("textErr")


//  Initially hide the form
var form = document.getElementById("formCol")
form.style.display = "none"

// show the form
var addButton = document.getElementById("addbtn")
addButton.onclick = function(){
    // alert('add blog')
    form.style.display = "initial"
}

// hide the form and clean the values
var cancelbtn = document.getElementById("cancelbtn")
cancelbtn.onclick = function(){
    // alert('cancel')
    form.style.display = "none"
    header.value = description.value = ""
    tError.innerHTML = nError.innerHTML = ""
}

// Error Messages
function printError(element, msg){
    document.getElementById(element).innerHTML=msg;
}

// form can't be empty
function validateForm(){
    var check = true
    if(header.value == ""){
        printError("nameErr",'Please enter a title')
        check = false
    } else {
        printError("nameErr","")
    }
    if(description.value == ""){
        printError("textErr","Please enter a small description")
        check = false
    } else {
        printError("textErr","")
    }
    return check
}

// Insert the values in blog
var submitButton = document.getElementById("submitbtn")
submitButton.onclick = function(){
    // alert('submit blog')
    if(validateForm()){
        // alert('point A')

        var innerhtml = `
            <div class="test col">
                <img src="./images/clouds.jpg" class="img-fluid" alt="">
            </div>
            <div class="col secTwo">
                <div class="row">
                    <div class="col head">
                        <h1>${header.value}</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col desc">
                        <p>${description.value}</p>
                    </div>
                </div>
            </div>
        `
        // alert('point B')
        var divrow = document.createElement('div')
        // alert('point B 1')
        // divrow.className('row')
        divrow.setAttribute('class','row')
        // alert('point B 2')
        divrow.innerHTML = innerhtml
        // alert('point C')
        var list = document.getElementById('bigBlog')
        list.insertBefore(divrow,list.childNodes[list.childElementCount])
        // alert('point D')
        header.value = description.value = ""
        tError.innerHTML = nError.innerHTML = ""
        form.style.display = "none"
    }
}