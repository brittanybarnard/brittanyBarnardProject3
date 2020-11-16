//user has 4 questions with options a, b, c, d
    //(form input type=radio to select)

    //user clicks on an option for each question
    //create something to store answer

//submit form button

//IF option a return "gym rat"
//ELSE if option b return "regular gym goer"
//ELSE if option c return ""
//else option d return

//display results to the page


const gymPersonalityApp = {};

const gymStereotypes = [cardioBunny, bodyBuilder, everydayGymGoer];
// console.log(gymStereotypes);

gymPersonalityApp.init = () => {

}

$(function(){
    $("form").on("submit", function(e){
        e.preventDefault();
        // console.log("formhasbeensubmitted");

        const usersAnswers = [
            $("input[name=question1]:checked").val(),
            $("input[name=question2]:checked").val(),
            $("input[name=question3]:checked").val(),
            $("input[name=question4]:checked").val(),
        ]
        // console.log(usersAnswers);
        const totalUsersAnswers = {};

        for (let i = 0; i < usersAnswers.length; i++) {
            const gymStereotype = usersAnswers[i];
            if (totalUsersAnswers[gymStereotype]) {
                totalUsersAnswers[gymStereotype] = totalUsersAnswers[gymStereotype] + 1;
            } else if (!totalUsersAnswers[gymStereotype]) {
                totalUsersAnswers[gymStereotype] = 1;
            }
            // console.log(gymStereotype);
            alert(gymStereotype);

        }
    })
    gymPersonalityApp.init();
})




