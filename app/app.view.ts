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

		todo( id: string ) {
			return this.realm().Node( $hyoo_crus_ref( id ), $ent_app_todo )
		}

		todo_name( id: string, next?: string ) {
			console.log( 'todo', id, next, this.todo(id) )
			return this.todo(id).Name( next )?.val( next ) ?? ''
		}

		check_todos( next?: any ) {
			console.log( 'check_todos', this.user()?.Todos() )
			console.log( 'check_todos list', this.user()?.Todos()?.remote_list() )
		}
	}
}
