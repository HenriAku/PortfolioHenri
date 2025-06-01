<script setup>
import { reactive } from 'vue'
import Titre from './Titre.vue'
import Input from './Input.vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = async () => {
  if (!form.name || !form.email || !form.subject || !form.message) {
    alert("Veuillez remplir tous les champs.")
    return
  }

  try {
    const response = await fetch('http://localhost:3001/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })

    const data = await response.json()

    if (response.ok) {
      alert('Message envoyé !')
      form.name = ''
      form.email = ''
      form.subject = ''
      form.message = ''
    } else {
      alert(data.error || 'Erreur')
    }
  } catch (err) {
    alert('Erreur réseau : ' + err.message)
  }
}
</script>

<template>
  <Titre titre="Contact" color="text-blue-semi-clair" />
  
<form @submit.prevent="handleSubmit">
    <div class="d-flex flex-column mt-4 pt-5 mb-5 gap-4 flex-md-row justify-content-center align-items-center align-items-md-start">
      <div class="d-flex flex-column w-25 me-0 me-md-5">
        <Input type="text" label="Nom Prénom" v-model="form.name" />
        <Input type="email" label="Adresse email" v-model="form.email" />
        <Input type="text" label="Objet" v-model="form.subject" />
      </div>

      <div class="mb-3 w-25 ms-0 ms-md-5">
        <label for="msg" class="form-label text-black fs-5">Message</label>
        <textarea
          id="msg"
          class="form-control border border-black border-1"
          style="height: 220px;"
          placeholder="Écris ton message ici..."
          v-model="form.message">
        </textarea>
      </div>
    </div>

    <div class="d-flex justify-content-center align-items-center mb-5">
      <input
        type="submit"
        value="Envoyer"
        class="bg-blue-clair-opacity rounded-pill text-white btnInput border border-black"
        style="width: 150px; height: 35px;">
    </div>
  </form>
</template>
