<template>
    <div class="projects">
        <div v-for="project in projects" class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4><a :href="project.link"> {{project.name}} </a></h4>
                    </div>
                    <div class="panel-body">
                        {{project.description}}
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
        name: 'projects',
        data(){
            return({
                projects: [
                    {
                        name: "How to Perl",
                        description: "A Perl language documentation website built with the latest front-end best practices and APIs. The website is currently in progress.",
                        link: "https://how-to-perl.herokuapp.com"
                    },
                    {
                        name: "Moonbeam Technologies",
                        description: "This is my company's website.",
                        link: "https://moonbeam-technologies.herokuapp.com"
                    },
                    {
                        name: "Red Velvet",
                        description: "Just twitter feeds for developers.",
                        link: "https://red-velvet.herokuapp.com"
                    }
                ]
            })
        }
    }
</script>