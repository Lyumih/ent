namespace $.$$ {
	export class $ent_app extends $.$ent_app {

		@$mol_mem
		user() {
			return this.realm().home().hall_by( $ent_app_user, $hyoo_crus_rank_public )
		}

		user_id(): string {
			return 'Пользователь id: ' + this.user()?.ref().description ?? ''
		}

		username( next?: string | undefined ): string {
			return this.user()?.Username( next )?.val( next ) ?? ''
		}

		todo_add( next?: any ) {
			this.user()?.add_todo( this.todo_new() )
		}

		@$mol_mem
		todo_list(): readonly any[] {
			return this.user()?.Todos()?.remote_list().map( todo => this.Todo( todo.ref() ) ) ?? []
		}

		todo( id: string ) {
			return this.realm().Node( $hyoo_crus_ref( id ), $ent_app_todo )
		}

		todo_name( id: string, next?: string ) {
			return this.todo( id ).Name( next )?.val( next ) ?? ''
		}

		todo_end( id: any, next?: any ) {
			return this.todo( id ).DateEnd( next )?.val( next ) ?? null
		}

		todo_done( id: any, next?: boolean | undefined ): boolean {
			return this.todo( id ).Done( next )?.val( next ) ?? false
		}

		todo_delete( id: string, next?: any ) {
			this.user()?.Todos()?.cut( $hyoo_crus_ref( id ) )
		}
	}
}
