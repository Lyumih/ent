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

		user_id(): string {
			return 'User_id '+ this.user()?.ref().description ?? ''
		}

		check_user( next?: any ) {
			console.log( 'check_user', this.user()?.Username()?.val(), this.user() )
		}

		username( next?: string | undefined ): string {
			console.log( this.user()?.Username() )
			return this.user()?.Username(next)?.val( next ) ?? ''
		}


		add( next?: any ) {
			console.log( 'add', next, this.input() )
			this.user()?.add_todo( this.input() )
			console.log('todos', this.user()?.Todos())
		}

		@$mol_mem
		todo_list(): readonly any[] {
			return this.user()?.Todos()?.remote_list().map( todo => this.Todo(todo.ref()) ) ?? []
		}

		todo( id: any, next?: any ) {
			console.log( 'todo', id, next, this.user()?.Todos()?.find( id ) )
			// console.log( this.user()?.Todos()?.remote_list()?.find( ( todo ) => todo.ref().description === id )?.Name( next ), next )
			console.log( 'hyoo_crus_ref', $hyoo_crus_ref( id ) )

			const todo_realm = this.realm().Node( $hyoo_crus_ref( id ), $ent_app_todo )
			console.log( 'todo_realm', todo_realm )
			
			const todo = this.user()?.Todos()?.remote_list()?.find( ( todo ) => todo.ref() === id )
			console.log( "TODO", todo, todo?.Name(), todo?.Name()?.val() )
			
			return todo?.Name( next )?.val(next) ?? ''
			// return this.user()?.Todos()?.remote_get( id )
			return next
		}

		check_todos( next?: any ) {
			console.log( 'check_todos', this.user()?.Todos() )
			console.log( 'check_todos list', this.user()?.Todos()?.remote_list() )
		}
	}
}
