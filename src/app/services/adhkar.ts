import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';

interface Adhkar {
  id: string;
  ar: string;
  arDescription: string;
  fr: string;
  frDescription: string;
  category: string;
  count: number;
}

@Injectable({
  providedIn: 'root',
})
export class AdhkarService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly favorites = signal<Set<string>>(new Set(this.getFavorites()));

  private getFavorites(): string[] {
    if (this.isBrowser) {
      return JSON.parse(localStorage.getItem('favorites') || '[]');
    }
    return [];
  }
  private readonly currentCategory = signal<string | null>(null);

  readonly adhkarList = signal<Adhkar[]>([
    // Les adhkars du matin
    {
      id: 'morning-ayat-kursi',
      ar: `اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ`,
      arDescription: 'آية الكرسي',
      fr: `Allah ! Point de divinité que Lui, le Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni sommeil ne Le saisissent. A Lui appartient tout ce qui est dans les cieux et sur la terre. Qui peut intercéder auprès de Lui sans Sa permission ? Il connaît leur passé et leur futur. Et ils ne cernent de Sa science que ce qu'Il veut. Son Trône déborde les cieux et la terre, dont la garde ne Lui coûte aucune peine. Et Il est le Très Haut, le Très Grand.`,
      frDescription: 'Le verset du Trône',
      category: 'morning',
      count: 1,
    },
    {
      id: 'morning-ikhlas',
      ar: `قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ`,
      arDescription: 'سورة الإخلاص',
      fr: `Dis: Il est Allah, Unique. Allah, Le Seul à être imploré pour ce que nous désirons. Il n'a jamais engendré, n'a pas été engendré non plus. Et nul n'est égal à Lui.`,
      frDescription: 'Sourate Al-Ikhlas (Le Monothéisme pur)',
      category: 'morning',
      count: 3,
    },
    {
      id: 'morning-falaq',
      ar: `قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ`,
      arDescription: 'سورة الفلق',
      fr: `Dis: Je cherche protection auprès du Seigneur de l'aube naissante, contre le mal des êtres qu'Il a créés, contre le mal de l'obscurité quand elle s'approfondit, contre le mal de celles qui soufflent sur les nœuds, et contre le mal de l'envieux quand il envie.`,
      frDescription: "Sourate Al-Falaq (L'Aube naissante)",
      category: 'morning',
      count: 3,
    },
    {
      id: 'morning-nas',
      ar: `قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ`,
      arDescription: 'سورة الناس',
      fr: `Dis: Je cherche protection auprès du Seigneur des hommes, le Souverain des hommes, Dieu des hommes, contre le mal du mauvais conseiller, furtif, qui souffle le mal dans les poitrines des hommes, qu'il soit un djinn ou un être humain.`,
      frDescription: 'Sourate An-Nas (Les Hommes)',
      category: 'morning',
      count: 3,
    },
    {
      id: 'morning-sayyid-istighfar',
      ar: `اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي، فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ`,
      arDescription: 'سيد الاستغفار',
      fr: `Ô Allah, Tu es mon Seigneur, il n'y a de divinité que Toi, Tu m'as créé et je suis Ton serviteur. Je me conforme autant que je peux à mon engagement et à ma promesse envers Toi. Je cherche refuge auprès de Toi contre le mal que j'ai commis. Je reconnais Tes bienfaits à mon égard, et je reconnais mes péchés. Pardonne-moi donc, car nul ne pardonne les péchés excepté Toi.`,
      frDescription: 'Le maître des demandes de pardon',
      category: 'morning',
      count: 1,
    },
    {
      id: 'morning-subhanallah',
      ar: `سُبْحَانَ اللَّهِ وَبِحَمْدِهِ`,
      arDescription: 'التسبيح',
      fr: `Gloire à Allah et à Sa louange`,
      frDescription: "Glorification d'Allah",
      category: 'morning',
      count: 100,
    },
    {
      id: 'morning-bismillah-protection',
      ar: `بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ`,
      arDescription: 'دعاء الحماية',
      fr: `Au nom d'Allah, avec le nom duquel rien ne peut nuire, ni sur terre ni dans le ciel, et Il est l'Audient, l'Omniscient`,
      frDescription: 'Invocation de protection',
      category: 'morning',
      count: 3,
    },
    {
      id: 'morning-kalimat-tammat',
      ar: `أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ`,
      arDescription: 'الاستعاذة',
      fr: `Je cherche refuge auprès des paroles parfaites d'Allah contre le mal de ce qu'Il a créé`,
      frDescription: 'Demande de protection',
      category: 'morning',
      count: 3,
    },
    {
      id: 'morning-ya-hayyu',
      ar: `يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ`,
      arDescription: 'الاستغاثة',
      fr: `Ô Vivant, Ô Subsistant, par Ta miséricorde je demande secours`,
      frDescription: 'Demande de secours',
      category: 'morning',
      count: 3,
    },
    {
      id: 'morning-asbahna',
      ar: `اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ`,
      arDescription: 'دعاء الصباح',
      fr: `Ô Allah, par Toi nous atteignons le matin et par Toi nous atteignons le soir, par Toi nous vivons et par Toi nous mourons, et vers Toi se fera la résurrection`,
      frDescription: 'Invocation du matin',
      category: 'morning',
      count: 1,
    },
    {
      id: 'morning-afini',
      ar: `اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ`,
      arDescription: 'دعاء العافية',
      fr: `Ô Allah, préserve-moi dans mon corps, Ô Allah, préserve-moi dans mon ouïe, Ô Allah, préserve-moi dans ma vue. Il n'y a de divinité que Toi`,
      frDescription: 'Invocation de préservation',
      category: 'morning',
      count: 3,
    },
    {
      id: 'morning2',
      ar: 'قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
      arDescription: 'سورة الإخلاص',
      fr: "Dis: Il est Allah, Unique. Allah, Le Seul à être imploré pour ce que nous désirons. Il n'a jamais engendré, n'a pas été engendré non plus. Et nul n'est égal à Lui.",
      frDescription: 'Sourate Al-Ikhlas (Le Monothéisme pur)',
      category: 'morning',
      count: 3,
    },
    {
      id: 'morning3',
      ar: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ',
      arDescription: 'سورة الفلق',
      fr: "Dis: Je cherche protection auprès du Seigneur de l'aube naissante, contre le mal des êtres qu'Il a créés, contre le mal de l'obscurité quand elle s'approfondit, contre le mal de celles qui soufflent sur les nœuds, et contre le mal de l'envieux quand il envie.",
      frDescription: "Sourate Al-Falaq (L'Aube naissante)",
      category: 'morning',
      count: 3,
    },
    {
      id: 'morning4',
      ar: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ',
      arDescription: 'سورة الناس',
      fr: "Dis: Je cherche protection auprès du Seigneur des hommes, le Souverain des hommes, Dieu des hommes, contre le mal du mauvais conseiller, furtif, qui souffle le mal dans les poitrines des hommes, qu'il soit un djinn ou un être humain.",
      frDescription: 'Sourate An-Nas (Les Hommes)',
      category: 'morning',
      count: 3,
    },
    {
      id: 'morning5',
      ar: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي، فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
      arDescription: 'سيد الاستغفار',
      fr: "Ô Allah, Tu es mon Seigneur, il n'y a de divinité que Toi, Tu m'as créé et je suis Ton serviteur. Je me conforme autant que je peux à mon engagement et à ma promesse envers Toi. Je cherche refuge auprès de Toi contre le mal que j'ai commis. Je reconnais Tes bienfaits à mon égard, et je reconnais mes péchés. Pardonne-moi donc, car nul ne pardonne les péchés excepté Toi.",
      frDescription: 'Le maître des demandes de pardon',
      category: 'morning',
      count: 1,
    },
    {
      id: 'morning6',
      ar: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
      arDescription: 'التسبيح',
      fr: 'Gloire à Allah et à Sa louange',
      frDescription: "Glorification d'Allah",
      category: 'morning',
      count: 100,
    },
    {
      id: 'morning7',
      ar: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
      arDescription: 'دعاء الحماية',
      fr: "Au nom d'Allah, avec le nom duquel rien ne peut nuire, ni sur terre ni dans le ciel, et Il est l'Audient, l'Omniscient",
      frDescription: 'Invocation de protection',
      category: 'morning',
      count: 3,
    },
    {
      id: 'morning8',
      ar: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
      arDescription: 'الاستعاذة',
      fr: "Je cherche refuge auprès des paroles parfaites d'Allah contre le mal de ce qu'Il a créé",
      frDescription: 'Demande de protection',
      category: 'morning',
      count: 3,
    },
    {
      id: 'morning9',
      ar: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ',
      arDescription: 'الاستغاثة',
      fr: 'Ô Vivant, Ô Subsistant, par Ta miséricorde je demande secours',
      frDescription: 'Demande de secours',
      category: 'morning',
      count: 3,
    },
    {
      id: 'morning10',
      ar: 'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ',
      arDescription: 'دعاء الصباح',
      fr: 'Ô Allah, par Toi nous atteignons le matin et par Toi nous atteignons le soir, par Toi nous vivons et par Toi nous mourons, et vers Toi se fera la résurrection',
      frDescription: 'Invocation du matin',
      category: 'morning',
      count: 1,
    },
    {
      id: 'morning11',
      ar: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ',
      arDescription: 'دعاء العافية',
      fr: "Ô Allah, préserve-moi dans mon corps, Ô Allah, préserve-moi dans mon ouïe, Ô Allah, préserve-moi dans ma vue. Il n'y a de divinité que Toi",
      frDescription: 'Invocation de préservation',
      category: 'morning',
      count: 3,
    },
  ]);

  readonly filteredAdhkar = computed(() => {
    const category = this.currentCategory();
    if (!category) return [];
    return this.adhkarList().filter((dhikr) => dhikr.category === category);
  });

  setCategory(category: string): void {
    this.currentCategory.set(category);
  }

  toggleFavorite(id: string): void {
    const currentFavorites = new Set(this.favorites());
    if (currentFavorites.has(id)) {
      currentFavorites.delete(id);
    } else {
      currentFavorites.add(id);
    }
    this.favorites.set(currentFavorites);
    if (this.isBrowser) {
      localStorage.setItem('favorites', JSON.stringify([...currentFavorites]));
    }
  }

  isFavorite(id: string): boolean {
    return this.favorites().has(id);
  }
}
