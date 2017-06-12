<template>
    <div class="hello">
        <div class="jumbotron">
            <h1>Hello There!</h1>
            <p class="lead">
                My name is Juan, and right now I'm completing my BS in Computer Science. It has been a long way now, but I had amazing experiences, meeting new friends and sorts. Here, you will find out more about me. Exciting isn't it? Well, let's get started
            </p>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>About Me</h4>
                    </div>
                    <div class="panel-body">
                        <p>
                            I'm a little developer with big ambitions. I'm a big fan of food, tech, science, music and of course, gaming.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Education</h4>
                    </div>
                    <div class="panel-body">
                        <p>
                            <ul v-for="school in schools">
                                <li> {{school.name}} | {{school.major}} | {{school.date}} </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Experience</h4>
                    </div>
                    <div class="panel-body">
                        <p>
                            <ul v-for="job in companies">
                                <li> {{job.name}} | {{job.role}} | {{job.date}} </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Skills</h4>
                    </div>
                    <div class="panel-body">
                        <p>I'm proficient in the following programming languages:</p>
                        <p>
                            <ul v-for="skill in skills">
                                <li> {{skill.language}} </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>

<script>
    export default {
        name: "hello",
        data(){
            return({
                schools: [
                    {
                        name: "Polytechnic university of Puerto Rico",
                        major: "bachelor of Science in Computer Science",
                        date: "July 2011 - October 2016"
                    }
                ],
                companies: [
                    {
                        name: "AON Hewitt",
                        role: "Backend Software Developer",
                        date: "July 2016 - January 2017"
                    },
                    {
                        name: "Moonbeam Technologies",
                        role: "Software Engineer",
                        date: "March 2015 - Present"
                    },
                    {
                        name: "BeaconMD",
                        role: "Software Engineer",
                        date: "April 2017 - Present"
                    }
                ],
                skills: [
                    {language: "C++"},
                    {language: "C#"},
                    {language: "Java"},
                    {language: "Python"},
                    {language: "HTML5"},
                    {language: "CSS3"},
                    {language: "JavaScript"},
                    {language: "SQL"}
                ]
            })
        }
        
    }
</script>