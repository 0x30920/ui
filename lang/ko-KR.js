const heroAndArtifactCommons = {
    image: "일러스트레이션",
    icon: "아이콘",
    lore: "스토리",
    skill: "스킬",
    stats: "능력치",
    grade: "별 등급",
};

export default {
    languages: {
        en: "영어",
        pt: "포르투갈어",
        es: "스페인어",
        ko: "한국어",
        fr: "-",
    },
    links: {
        home: "홈으로",
        about: "위키에 대해서",
        heroes: "영웅",
        artifacts: "아티팩트",
        changelog: "체인지로그",
        privacyPolicy: "개인정보보호정책",
        back: "뒤로가기",
    },
    loader: {
        message: "데이터 수집중입니다, 기다려주세요..",
    },
    filters: {
        header: "필터링 방법:",
        byName: "이름으로 검색",
        noResult: "선택된 필터로 아무 결과도 찾을 수 없었습니다 ㅠㅠ",
        all: "모두",
        allClasses: "모든 직업",
        rarity: "레어도",
        classExclusive: "직업 한정",
        heroClass: "영웅 직업",
        element: "원소",
        zodiac: "별자리",
        buffs: "버프",
        debuffs: "디버프",
        openFilters: "클릭하여 사용가능한 필터 확인",
        closeAndClear: "필터 선택 취소 및 섹션 초기화",
        clearAllFilters: "필터 선택 취소",
    },
    errors: {
        title: "아이쿠... 오류가 발생했습니다.",
        description: "문제가 지속된다면 아래 GitHub을 통해 문의를 제출해주세요.",
    },
    home: {
        latest: "신규 영웅 및 아티팩트",
        searchQuestion: "무엇을 찾고 계신가요?",
        searchPlaceholder: "영웅 및 아티팩트 찾기...",
        currentEvents: "진행중인 이벤트",
        appDownloadHeader:
            "EpicSevenDB는 모바일 게임 에픽세븐을 위한 위키 및 데이터베이스입니다. 게임은 이 링크를 통해 다운받을 수 있습니다:",
        e7Reddit: "EpicSeven 레딧으로",
        e7Discord: "EpicSeven 디스코드 채널로",
        tools: "도구",
        version: "버젼",
    },
    artifacts: Object.assign(
        {
            back: "아티팩트 항목으로 돌아가기",
            classExclusive: "전용 직업",
            baseLevelStats: "기본 능력치",
            maxLevelStats: "최대 능력치",
            baseLevelSkill: "기본 스킬 레벨",
            maxLevelSkill: "최대 스킬 레벨",
        },
        heroAndArtifactCommons
    ),
    heroes: Object.assign(
        {
            back: "영웅 항목으로 돌아가기",
            profile: "프로필",
            classType: "직업",
            acquire: "획득",
            consume: "소모",
            soul: "소울",
            passive: "패시브",
            turns: "턴",
            soulBurnEffect: "소울번 효과",
            awakening: "각성",
            statsIncrease: "능력치 증가",
            skillEnhance: "기술 향상",
            skillUpgrade: "스킬 강화",
            skillUpgradeApplied: "예",
            resources: "소모되는 자원",
            imprint: "기억 각성",
            imprintPosition: "헌신 스킬 효과 적용 위치",
            noImprint: "헌신 스킬은 아직 볼 수 없습니다.",
            imprintBonus: "효과",
            maxLevelStats: "최대 레벨 능력치",
            lv1BaseStarNoAwaken: "레벨 1 - 소환했을 당시 &#9733;",
            lv50FiveStarNoAwaken: "레벨 50 5&#9733; (각성하지 않음)",
            lv60SixStarNoAwaken: "레벨 60 6&#9733; (각성하지 않음)",
            lv60SixStarFullyAwakened: "레벨 60 6&#9733; (각성 전부 완료)",
            attributes: {
                cp: "전투력",
                atk: "공격력",
                def: "방어력",
                hp: "생명력",
                spd: "속도",
                chc: "치명확륙",
                chd: "치명피해",
                eff: "효과적중",
                efr: "효과저항",
                dac: "협공확률",
            },
            specialty: "클래스 체인지",
            specialtyChangeExplain:
                "<strong class='white'>{0}</strong> 는(은) 클래스 체인지가 가능합니다: <strong class='white'>{1}</strong>. 클래스 체인지 퀘스트를 시작하기 전에 해당 영웅의 레벨이 50이어야 합니다.",
            battleArt: "전투중 일러스트",
            relations: "관계",
            specialtySkill: {
                header: "특성",
                command: "지휘",
                charm: "매력",
                politics: "정치",
            },
            voice: "음성 목록",
        },
        heroAndArtifactCommons
    ),
    about: {
        p1:
            "EpicSevenDB.com은 에픽세븐의 영웅, 아티팩트, 장비, 아이템 및 퀘스트 등에 대한 정확한 정보를 제공하는 것을 목표로하는 팬들이 함께 만든 웹사이트입니다!",
        p2:
            "이를 위해 GitHub을 통해 피드백, 아이디어 및 게임 데이터를 수신하며 전 세계의 에픽세븐 커뮤니티의 도움을 받고 있습니다. 저희에게 도움을 주고 싶다면 아래 링크를 참조해주세요. 크고 작은 모든 도움에 감사드립니다!",
    },
    classes: {
        knight: "기사",
        warrior: "전사",
        thief: "도적",
        "soul-weaver": "정령사",
        mage: "마도사",
        ranger: "사수",
        material: "재료",
    },
    elements: {
        fire: "화염속성",
        earth: "자연속성",
        ice: "냉기속성",
        light: "광속성",
        dark: "암속성",
    },
    zodiacSigns: {
        aries: "양자리",
        taurus: "황소자리",
        gemini: "쌍둥이자리",
        cancer: "게자리",
        leo: "사자자리",
        virgo: "처녀자리",
        libra: "천칭자리",
        scorpio: "전갈자리",
        sagittarius: "궁수자리",
        capricorn: "염소자리",
        aquarius: "물병자리",
        pisces: "물고기자리",
    },
    relationships: {
        grudge: "원한",
        longing: "동경",
        love: "사랑",
        rival: "라이벌",
        trust: "신뢰",
    },
    item: {
        needed: "필요",
        stageDrops: "스테이지 드롭",
        apShops: "AP 숍",
        available: "사용 가능함",
    },
};
