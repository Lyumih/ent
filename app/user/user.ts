namespace $ {
	export class $ent_app_user extends $hyoo_crus_entity.with( {
		Username: $hyoo_crus_atom_str,
		Todos: $hyoo_crus_list_ref_to( ()=> $ent_app_todo ),
	} ) {
		
	}
}
