<template>
	<div class="top-0 start-0 w-100 z-3 d-flex justify-content-center mt-4 fixed-top">
		<nav class="navbar navbar-expand-lg bg-blue-fonce w-50 rounded-5">
			<div class="container-fluid">
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
					<div class="navbar-nav">
						<router-link class="nav-link text-light ps-5" :to="{ path: '/', hash: '#presentation' }">Présentation</router-link>
						<router-link class="nav-link text-light ps-5" :to="{ path: '/', hash: '#parcours' }">Formation</router-link>
						<router-link class="nav-link text-light ps-5" :to="{ path: '/', hash: '#portfolio' }">Portfolio</router-link>
						<router-link class="nav-link text-light ps-5" :to="{ path: '/', hash: '#competence' }">Compétence</router-link>
						<router-link class="nav-link text-light ps-5" :to="{ path: '/', hash: '#contact' }">Contact</router-link>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>