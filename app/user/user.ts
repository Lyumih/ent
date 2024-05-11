namespace $ {
	export class $ent_app_user extends $hyoo_crus_entity.with( {
		Username: $hyoo_crus_atom_str,
		Todos: $hyoo_crus_list_ref_to( ()=> $ent_app_todo ),
	} ) {

		@$mol_action
		add_todo(name: string) {
			console.log( 'add todo', this )
			const todo = this.Todos( true )?.remote_make( $hyoo_crus_rank_orgy )
			todo?.Name()?.val( name )
			todo?.Title()?.val( name )
			console.log("add_todo", todo)
			return todo
		}
	}
}
