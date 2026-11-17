var wms_layers = [];


        var lyr_ortho2014_0 = new ol.layer.Tile({
            'title': 'ortho2014',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ORTHOIMAGERY.ORTHOPHOTOS2014&STYLE=normal&TILEMATRIXSET=PM&FORMAT=image/jpeg&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}'
            })
        });

    var projection_Ortho20cm_1 = ol.proj.get('EPSG:3857');
    var projectionExtent_Ortho20cm_1 = projection_Ortho20cm_1.getExtent();
    var size_Ortho20cm_1 = ol.extent.getWidth(projectionExtent_Ortho20cm_1) / 256;
    var resolutions_Ortho20cm_1 = new Array(14);
    var matrixIds_Ortho20cm_1 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Ortho20cm_1[z] = size_Ortho20cm_1 / Math.pow(2, z);
        matrixIds_Ortho20cm_1[z] = z;
    }
    var lyr_Ortho20cm_1 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://data.geopf.fr/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities",
                                attributions: ' ',
                                "layer": "HR.ORTHOIMAGERY.ORTHOPHOTOS",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_Ortho20cm_1,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Ortho20cm_1),
                resolutions: resolutions_Ortho20cm_1,
                matrixIds: matrixIds_Ortho20cm_1
              }),
              style: 'normal',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Ortho 20 cm',
                            opacity: 1.0,
                            
                            
                          });
var format_vignes_2 = new ol.format.GeoJSON();
var features_vignes_2 = format_vignes_2.readFeatures(json_vignes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vignes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vignes_2.addFeatures(features_vignes_2);
var lyr_vignes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vignes_2, 
                style: style_vignes_2,
                popuplayertitle: 'vignes',
                interactive: true,
                title: '<img src="styles/legend/vignes_2.png" /> vignes'
            });
var format_massifdacacia_bdd_3 = new ol.format.GeoJSON();
var features_massifdacacia_bdd_3 = format_massifdacacia_bdd_3.readFeatures(json_massifdacacia_bdd_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_massifdacacia_bdd_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_massifdacacia_bdd_3.addFeatures(features_massifdacacia_bdd_3);
var lyr_massifdacacia_bdd_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_massifdacacia_bdd_3, 
                style: style_massifdacacia_bdd_3,
                popuplayertitle: 'massif d\' acacia_bdd',
                interactive: true,
    title: 'massif d\' acacia_bdd<br />\
    <img src="styles/legend/massifdacacia_bdd_3_0.png" /> 2014<br />\
    <img src="styles/legend/massifdacacia_bdd_3_1.png" /> 2026<br />' });
var format_progressionpossibledesmassifsdacacias_4 = new ol.format.GeoJSON();
var features_progressionpossibledesmassifsdacacias_4 = format_progressionpossibledesmassifsdacacias_4.readFeatures(json_progressionpossibledesmassifsdacacias_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_progressionpossibledesmassifsdacacias_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_progressionpossibledesmassifsdacacias_4.addFeatures(features_progressionpossibledesmassifsdacacias_4);
var lyr_progressionpossibledesmassifsdacacias_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_progressionpossibledesmassifsdacacias_4, 
                style: style_progressionpossibledesmassifsdacacias_4,
                popuplayertitle: 'progression possible des massifs dacacias',
                interactive: true,
    title: 'progression possible des massifs dacacias<br />\
    <img src="styles/legend/progressionpossibledesmassifsdacacias_4_0.png" /> forte<br />\
    <img src="styles/legend/progressionpossibledesmassifsdacacias_4_1.png" /> moyenne<br />' });
var format_vignesmenacesparlesacacias_5 = new ol.format.GeoJSON();
var features_vignesmenacesparlesacacias_5 = format_vignesmenacesparlesacacias_5.readFeatures(json_vignesmenacesparlesacacias_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vignesmenacesparlesacacias_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vignesmenacesparlesacacias_5.addFeatures(features_vignesmenacesparlesacacias_5);
var lyr_vignesmenacesparlesacacias_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vignesmenacesparlesacacias_5, 
                style: style_vignesmenacesparlesacacias_5,
                popuplayertitle: 'vignes menaces par les acacias',
                interactive: true,
    title: 'vignes menaces par les acacias<br />\
    <img src="styles/legend/vignesmenacesparlesacacias_5_0.png" /> forte<br />\
    <img src="styles/legend/vignesmenacesparlesacacias_5_1.png" /> moyenne<br />' });
var format_point_conflit_6 = new ol.format.GeoJSON();
var features_point_conflit_6 = format_point_conflit_6.readFeatures(json_point_conflit_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_conflit_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_conflit_6.addFeatures(features_point_conflit_6);
var lyr_point_conflit_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_conflit_6, 
                style: style_point_conflit_6,
                popuplayertitle: 'point_conflit',
                interactive: true,
    title: 'point_conflit<br />\
    <img src="styles/legend/point_conflit_6_0.png" /> 1<br />\
    <img src="styles/legend/point_conflit_6_1.png" /> 2<br />' });
var format_lieudits_7 = new ol.format.GeoJSON();
var features_lieudits_7 = format_lieudits_7.readFeatures(json_lieudits_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lieudits_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lieudits_7.addFeatures(features_lieudits_7);
var lyr_lieudits_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lieudits_7, 
                style: style_lieudits_7,
                popuplayertitle: 'lieu dits',
                interactive: true,
                title: '<img src="styles/legend/lieudits_7.png" /> lieu dits'
            });
var format_batiments_8 = new ol.format.GeoJSON();
var features_batiments_8 = format_batiments_8.readFeatures(json_batiments_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batiments_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batiments_8.addFeatures(features_batiments_8);
var lyr_batiments_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batiments_8, 
                style: style_batiments_8,
                popuplayertitle: 'batiments',
                interactive: false,
                title: '<img src="styles/legend/batiments_8.png" /> batiments'
            });
var format_route_9 = new ol.format.GeoJSON();
var features_route_9 = format_route_9.readFeatures(json_route_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_route_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_route_9.addFeatures(features_route_9);
var lyr_route_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_route_9, 
                style: style_route_9,
                popuplayertitle: 'route',
                interactive: false,
                title: '<img src="styles/legend/route_9.png" /> route'
            });
var format_coursdeau_10 = new ol.format.GeoJSON();
var features_coursdeau_10 = format_coursdeau_10.readFeatures(json_coursdeau_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coursdeau_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coursdeau_10.addFeatures(features_coursdeau_10);
var lyr_coursdeau_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_coursdeau_10, 
                style: style_coursdeau_10,
                popuplayertitle: 'cours d\'eau',
                interactive: true,
                title: '<img src="styles/legend/coursdeau_10.png" /> cours d\'eau'
            });
var group_habillage = new ol.layer.Group({
                                layers: [lyr_lieudits_7,lyr_batiments_8,lyr_route_9,],
                                fold: 'open',
                                title: 'habillage'});

lyr_ortho2014_0.setVisible(true);lyr_Ortho20cm_1.setVisible(true);lyr_vignes_2.setVisible(true);lyr_massifdacacia_bdd_3.setVisible(true);lyr_progressionpossibledesmassifsdacacias_4.setVisible(true);lyr_vignesmenacesparlesacacias_5.setVisible(true);lyr_point_conflit_6.setVisible(true);lyr_lieudits_7.setVisible(true);lyr_batiments_8.setVisible(true);lyr_route_9.setVisible(true);lyr_coursdeau_10.setVisible(true);
var layersList = [lyr_ortho2014_0,lyr_Ortho20cm_1,lyr_vignes_2,lyr_massifdacacia_bdd_3,lyr_progressionpossibledesmassifsdacacias_4,lyr_vignesmenacesparlesacacias_5,lyr_point_conflit_6,group_habillage,lyr_coursdeau_10];
lyr_vignes_2.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'methode_d_acquisition_planimetrique': 'methode_d_acquisition_planimetrique', 'precision_planimetrique': 'precision_planimetrique', 'nature': 'nature', 'sources': 'sources', 'identifiants_sources': 'identifiants_sources', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'surf(ha)': 'surf(ha)', });
lyr_massifdacacia_bdd_3.set('fieldAliases', {'id_massif': 'id_massif', 'annee_photo': 'annee_photo', 'date_obs': 'date_obs', 'observateur': 'observateur', 'remarques': 'remarques', 'uuid_massif': 'uuid_massif', 'nom_massif': 'nom_massif', 'methode_saisie': 'methode_saisie', 'surface': 'surface', });
lyr_progressionpossibledesmassifsdacacias_4.set('fieldAliases', {'fid': 'fid', 'id_niveau': 'id_niveau', 'niveau': 'niveau', 'distance_min_m': 'distance_min_m', 'distance_max_m': 'distance_max_m', });
lyr_vignesmenacesparlesacacias_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'id_zone_vegetation': 'id_zone_vegetation', 'niveau': 'niveau', });
lyr_point_conflit_6.set('fieldAliases', {'fid': 'fid', 'id_conflit': 'id_conflit', 'id_massif': 'id_massif', 'id_zone_vegetation': 'id_zone_vegetation', 'id_niveau': 'id_niveau', 'surf_exposee_m2': 'surf_exposee_m2', });
lyr_lieudits_7.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'nature': 'nature', 'nature_detaillee': 'nature_detaillee', 'toponyme': 'toponyme', 'statut_du_toponyme': 'statut_du_toponyme', 'importance': 'importance', 'fictif': 'fictif', 'etat_de_l_objet': 'etat_de_l_objet', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'sources': 'sources', 'identifiants_sources': 'identifiants_sources', 'methode_d_acquisition_planimetrique': 'methode_d_acquisition_planimetrique', 'precision_planimetrique': 'precision_planimetrique', 'insee_commune': 'insee_commune', 'commune': 'commune', 'identifiant_voie_ban': 'identifiant_voie_ban', 'id_ban_odonyme': 'id_ban_odonyme', });
lyr_batiments_8.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'nature': 'nature', 'usage_1': 'usage_1', 'usage_2': 'usage_2', 'construction_legere': 'construction_legere', 'etat_de_l_objet': 'etat_de_l_objet', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'sources': 'sources', 'identifiants_sources': 'identifiants_sources', 'methode_d_acquisition_planimetrique': 'methode_d_acquisition_planimetrique', 'methode_d_acquisition_altimetrique': 'methode_d_acquisition_altimetrique', 'precision_planimetrique': 'precision_planimetrique', 'precision_altimetrique': 'precision_altimetrique', 'nombre_de_logements': 'nombre_de_logements', 'nombre_d_etages': 'nombre_d_etages', 'materiaux_des_murs': 'materiaux_des_murs', 'materiaux_de_la_toiture': 'materiaux_de_la_toiture', 'hauteur': 'hauteur', 'altitude_minimale_sol': 'altitude_minimale_sol', 'altitude_minimale_toit': 'altitude_minimale_toit', 'altitude_maximale_toit': 'altitude_maximale_toit', 'altitude_maximale_sol': 'altitude_maximale_sol', 'origine_du_batiment': 'origine_du_batiment', 'appariement_fichiers_fonciers': 'appariement_fichiers_fonciers', 'identifiants_rnb': 'identifiants_rnb', });
lyr_route_9.set('fieldAliases', {'fid': 'fid', 'ID_RTE500': 'ID_RTE500', 'VOCATION': 'VOCATION', 'NB_CHAUSSE': 'NB_CHAUSSE', 'NB_VOIES': 'NB_VOIES', 'ETAT': 'ETAT', 'ACCES': 'ACCES', 'RES_VERT': 'RES_VERT', 'SENS': 'SENS', 'NUM_ROUTE': 'NUM_ROUTE', 'RES_EUROPE': 'RES_EUROPE', 'LONGUEUR': 'LONGUEUR', 'CLASS_ADM': 'CLASS_ADM', });
lyr_coursdeau_10.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'code_hydrographique': 'code_hydrographique', 'toponyme': 'toponyme', 'statut_du_toponyme': 'statut_du_toponyme', 'importance': 'importance', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'sources': 'sources', 'identifiants_sources': 'identifiants_sources', 'statut': 'statut', 'influence_de_la_maree': 'influence_de_la_maree', 'caractere_permanent': 'caractere_permanent', 'commentaire_sur_l_objet_hydro': 'commentaire_sur_l_objet_hydro', });
lyr_vignes_2.set('fieldImages', {'fid': '', 'cleabs': '', 'date_d_apparition': '', 'date_de_confirmation': '', 'methode_d_acquisition_planimetrique': '', 'precision_planimetrique': '', 'nature': '', 'sources': '', 'identifiants_sources': '', 'date_creation': '', 'date_modification': '', 'surf(ha)': '', });
lyr_massifdacacia_bdd_3.set('fieldImages', {'id_massif': 'TextEdit', 'annee_photo': 'Range', 'date_obs': 'DateTime', 'observateur': 'TextEdit', 'remarques': 'TextEdit', 'uuid_massif': 'TextEdit', 'nom_massif': 'TextEdit', 'methode_saisie': 'TextEdit', 'surface': 'TextEdit', });
lyr_progressionpossibledesmassifsdacacias_4.set('fieldImages', {'fid': '', 'id_niveau': '', 'niveau': '', 'distance_min_m': '', 'distance_max_m': '', });
lyr_vignesmenacesparlesacacias_5.set('fieldImages', {'fid': '', 'id': '', 'id_zone_vegetation': '', 'niveau': '', });
lyr_point_conflit_6.set('fieldImages', {'fid': '', 'id_conflit': '', 'id_massif': '', 'id_zone_vegetation': '', 'id_niveau': '', 'surf_exposee_m2': '', });
lyr_lieudits_7.set('fieldImages', {'fid': '', 'cleabs': '', 'nature': '', 'nature_detaillee': '', 'toponyme': '', 'statut_du_toponyme': '', 'importance': '', 'fictif': '', 'etat_de_l_objet': '', 'date_creation': '', 'date_modification': '', 'date_d_apparition': '', 'date_de_confirmation': '', 'sources': '', 'identifiants_sources': '', 'methode_d_acquisition_planimetrique': '', 'precision_planimetrique': '', 'insee_commune': '', 'commune': '', 'identifiant_voie_ban': '', 'id_ban_odonyme': '', });
lyr_batiments_8.set('fieldImages', {'fid': '', 'cleabs': '', 'nature': '', 'usage_1': '', 'usage_2': '', 'construction_legere': '', 'etat_de_l_objet': '', 'date_creation': '', 'date_modification': '', 'date_d_apparition': '', 'date_de_confirmation': '', 'sources': '', 'identifiants_sources': '', 'methode_d_acquisition_planimetrique': '', 'methode_d_acquisition_altimetrique': '', 'precision_planimetrique': '', 'precision_altimetrique': '', 'nombre_de_logements': '', 'nombre_d_etages': '', 'materiaux_des_murs': '', 'materiaux_de_la_toiture': '', 'hauteur': '', 'altitude_minimale_sol': '', 'altitude_minimale_toit': '', 'altitude_maximale_toit': '', 'altitude_maximale_sol': '', 'origine_du_batiment': '', 'appariement_fichiers_fonciers': '', 'identifiants_rnb': '', });
lyr_route_9.set('fieldImages', {'fid': '', 'ID_RTE500': '', 'VOCATION': '', 'NB_CHAUSSE': '', 'NB_VOIES': '', 'ETAT': '', 'ACCES': '', 'RES_VERT': '', 'SENS': '', 'NUM_ROUTE': '', 'RES_EUROPE': '', 'LONGUEUR': '', 'CLASS_ADM': '', });
lyr_coursdeau_10.set('fieldImages', {'fid': '', 'cleabs': '', 'code_hydrographique': '', 'toponyme': '', 'statut_du_toponyme': '', 'importance': '', 'date_creation': '', 'date_modification': '', 'date_d_apparition': '', 'date_de_confirmation': '', 'sources': '', 'identifiants_sources': '', 'statut': '', 'influence_de_la_maree': '', 'caractere_permanent': '', 'commentaire_sur_l_objet_hydro': '', });
lyr_vignes_2.set('fieldLabels', {'fid': 'hidden field', 'cleabs': 'hidden field', 'date_d_apparition': 'hidden field', 'date_de_confirmation': 'hidden field', 'methode_d_acquisition_planimetrique': 'hidden field', 'precision_planimetrique': 'hidden field', 'nature': 'hidden field', 'sources': 'hidden field', 'identifiants_sources': 'hidden field', 'date_creation': 'hidden field', 'date_modification': 'hidden field', 'surf(ha)': 'hidden field', });
lyr_massifdacacia_bdd_3.set('fieldLabels', {'id_massif': 'no label', 'annee_photo': 'no label', 'date_obs': 'inline label - visible with data', 'observateur': 'no label', 'remarques': 'no label', 'uuid_massif': 'no label', 'nom_massif': 'no label', 'methode_saisie': 'no label', 'surface': 'inline label - visible with data', });
lyr_progressionpossibledesmassifsdacacias_4.set('fieldLabels', {'fid': 'hidden field', 'id_niveau': 'hidden field', 'niveau': 'inline label - visible with data', 'distance_min_m': 'inline label - visible with data', 'distance_max_m': 'inline label - visible with data', });
lyr_vignesmenacesparlesacacias_5.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'id_zone_vegetation': 'hidden field', 'niveau': 'inline label - visible with data', });
lyr_point_conflit_6.set('fieldLabels', {'fid': 'hidden field', 'id_conflit': 'hidden field', 'id_massif': 'hidden field', 'id_zone_vegetation': 'hidden field', 'id_niveau': 'hidden field', 'surf_exposee_m2': 'inline label - visible with data', });
lyr_lieudits_7.set('fieldLabels', {'fid': 'hidden field', 'cleabs': 'hidden field', 'nature': 'hidden field', 'nature_detaillee': 'hidden field', 'toponyme': 'inline label - visible with data', 'statut_du_toponyme': 'hidden field', 'importance': 'hidden field', 'fictif': 'hidden field', 'etat_de_l_objet': 'hidden field', 'date_creation': 'hidden field', 'date_modification': 'hidden field', 'date_d_apparition': 'hidden field', 'date_de_confirmation': 'hidden field', 'sources': 'hidden field', 'identifiants_sources': 'hidden field', 'methode_d_acquisition_planimetrique': 'hidden field', 'precision_planimetrique': 'hidden field', 'insee_commune': 'hidden field', 'commune': 'hidden field', 'identifiant_voie_ban': 'hidden field', 'id_ban_odonyme': 'hidden field', });
lyr_batiments_8.set('fieldLabels', {'fid': 'no label', 'cleabs': 'no label', 'nature': 'no label', 'usage_1': 'no label', 'usage_2': 'no label', 'construction_legere': 'no label', 'etat_de_l_objet': 'no label', 'date_creation': 'no label', 'date_modification': 'no label', 'date_d_apparition': 'no label', 'date_de_confirmation': 'no label', 'sources': 'no label', 'identifiants_sources': 'no label', 'methode_d_acquisition_planimetrique': 'no label', 'methode_d_acquisition_altimetrique': 'no label', 'precision_planimetrique': 'no label', 'precision_altimetrique': 'no label', 'nombre_de_logements': 'no label', 'nombre_d_etages': 'no label', 'materiaux_des_murs': 'no label', 'materiaux_de_la_toiture': 'no label', 'hauteur': 'no label', 'altitude_minimale_sol': 'no label', 'altitude_minimale_toit': 'no label', 'altitude_maximale_toit': 'no label', 'altitude_maximale_sol': 'no label', 'origine_du_batiment': 'no label', 'appariement_fichiers_fonciers': 'no label', 'identifiants_rnb': 'no label', });
lyr_route_9.set('fieldLabels', {'fid': 'no label', 'ID_RTE500': 'no label', 'VOCATION': 'no label', 'NB_CHAUSSE': 'no label', 'NB_VOIES': 'no label', 'ETAT': 'no label', 'ACCES': 'no label', 'RES_VERT': 'no label', 'SENS': 'no label', 'NUM_ROUTE': 'no label', 'RES_EUROPE': 'no label', 'LONGUEUR': 'no label', 'CLASS_ADM': 'no label', });
lyr_coursdeau_10.set('fieldLabels', {'fid': 'hidden field', 'cleabs': 'hidden field', 'code_hydrographique': 'hidden field', 'toponyme': 'inline label - visible with data', 'statut_du_toponyme': 'hidden field', 'importance': 'hidden field', 'date_creation': 'hidden field', 'date_modification': 'hidden field', 'date_d_apparition': 'hidden field', 'date_de_confirmation': 'hidden field', 'sources': 'hidden field', 'identifiants_sources': 'hidden field', 'statut': 'hidden field', 'influence_de_la_maree': 'hidden field', 'caractere_permanent': 'hidden field', 'commentaire_sur_l_objet_hydro': 'hidden field', });
lyr_coursdeau_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});