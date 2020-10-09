<template>
    <div class="contact">
        <button @click="triggerModal"> show modal</button>
        <Modal v-if="showModal" :cancel="cancelBtn" :validate="valideBtn" >
        <h1>This is an contact page</h1>
            <p>text</p>
        </Modal>
    </div>
</template>

<script>
    import Modal from '../components/Modal';

    export default {
        components:{
            Modal
        },
        data: ()=>{
            return{
                showModal:false
            }
        },
        methods : {
            triggerModal () {
                this.showModal = !this.showModal
            },
            valideBtn(){
                this.triggerModal();
                alert("t'es bg")
            },
            cancelBtn(){
                this.triggerModal()
            },
        }
        }
</script>