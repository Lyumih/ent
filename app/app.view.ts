namespace $.$$ {
	export class $ent_app extends $.$ent_app {

		send( next?: any ) {
			console.log( this.user() )
			console.log( 'SEND', next, this.input() )
		}

		read( next?: any ) {
			console.log( 'READ', next, this.input() )
		}

		@$mol_mem
		user() {
			console.log( 'user!' )
			return this.realm().home().hall_by( $ent_app_user, $hyoo_crus_rank_public )
		}

		check_user( next?: any ) {
			console.log( 'check_user', this.user()?.Username()?.val(), this.user() )
		}

		username( next?: string | undefined ): string {
			return this.user()?.Username(next)?.val( next ) ?? ''
		}

		user_id(): string {
			return this.user()?.ref()?.description ?? ''
		}

		add( next?: any ) {
			console.log( 'add', next, this.input() )
			this.user()?.add_todo( this.input() )
			console.log('todos', this.user()?.Todos())
		}

		check_todos( next?: any ) {
			console.log( 'check_todos', this.user()?.Todos() )
			console.log( 'check_todos list', this.user()?.Todos()?.remote_list() )
		}
	}
}
