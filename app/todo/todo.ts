namespace $ {
	export class $ent_app_todo extends $hyoo_crus_entity.with({
		Name: $hyoo_crus_atom_str,
		Description: $hyoo_crus_atom_str,
		Status: $hyoo_crus_atom_bool,
		DateEnd: $hyoo_crus_atom_time,
		// Owner: $hyoo_crus_atom_ref_to( ()=> $ent_app_user ), //Нужна ли обратная ссылка?
	}) {
		
	}
}
