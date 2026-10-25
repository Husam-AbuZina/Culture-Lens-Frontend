import 'dart:convert';
import 'dart:io';

import '../../Culture-Lens-Mobile/lib/data/content_repository.dart';

Map<String, String> _localized(value) => {
      'en': value.en,
      'ar': value.ar,
    };

String _imageFileName(String assetPath) => assetPath.split('/').last;

void main() {
  final payload = {
    'cities': ContentRepository.cities
        .map(
          (city) => {
            'id': city.id,
            'name': _localized(city.name),
            'summary': _localized(city.summary),
            'description': _localized(city.description),
            'heroImage': _imageFileName(city.heroImage),
            'gallery': city.gallery.map(_imageFileName).toList(growable: false),
            'latitude': city.latitude,
            'longitude': city.longitude,
          },
        )
        .toList(growable: false),
    'places': ContentRepository.places
        .map(
          (place) => {
            'id': place.id,
            'cityId': place.cityId,
            'name': _localized(place.name),
            'summary': _localized(place.summary),
            'story': _localized(place.story),
            'category': _localized(place.category),
            'image': _imageFileName(place.image),
            'gallery': place.gallery.map(_imageFileName).toList(growable: false),
            'latitude': place.latitude,
            'longitude': place.longitude,
          },
        )
        .toList(growable: false),
  };

  File('src/data/culture_lens_content.json').writeAsStringSync(
    const JsonEncoder.withIndent('  ').convert(payload),
  );
}
