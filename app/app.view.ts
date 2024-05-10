namespace $.$$ {
	export class $ent_app extends $.$ent_app {

		send( next?: any ) {
			console.log( 'SEND', next, this.input() )
		}

		read( next?: any ) {
			console.log( 'READ', next, this.input() )
		}
		
	}
}
