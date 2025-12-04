const translation = {
  welcome: {
    firstStepTip: 'للبدء،',
    enterKeyTip: 'أدخل مفتاح OpenAI API الخاص بك أدناه',
    getKeyTip: 'احصل على مفتاح API الخاص بك من لوحة تحكم OpenAI',
    placeholder: 'مفتاح OpenAI API الخاص بك (مثل sk-xxxx)',
  },
  apiKeyInfo: {
    cloud: {
      trial: {
        title: 'أنت تستخدم حصة التجربة لـ {{providerName}}.',
        description: 'يتم توفير حصة التجربة لأغراض الاختبار الخاصة بك. قبل استنفاد حصة التجربة، يرجى إعداد مزود النموذج الخاص بك أو شراء حصة إضافية.',
      },
      exhausted: {
        title: 'تم استنفاد حصة التجربة الخاصة بك، يرجى إعداد مفتاح API الخاص بك.',
        description: 'لقد استنفدت حصة التجربة الخاصة بك. يرجى إعداد مزود النموذج الخاص بك أو شراء حصة إضافية.',
      },
    },
    selfHost: {
      title: {
        row1: 'للبدء،',
        row2: 'قم بإعداد مزود النموذج الخاص بك أولاً.',
      },
    },
    callTimes: 'أوقات الاتصال',
    usedToken: 'الرمز المستخدم',
    setAPIBtn: 'الذهاب لإعداد مزود النموذج',
    tryCloud: 'أو جرب النسخة السحابية من One Health مع عرض أسعار مجاني',
  },
  overview: {
    title: 'نظرة عامة',
    appInfo: {
      title: 'تطبيق الويب',
      explanation: 'تطبيق ويب ذكاء اصطناعي جاهز للاستخدام',
      accessibleAddress: 'عنوان URL عام',
      preview: 'معاينة',
      launch: 'إطلاق',
      regenerate: 'إعادة إنشاء',
      regenerateNotice: 'هل تريد إعادة إنشاء عنوان URL العام؟',
      preUseReminder: 'يرجى تمكين تطبيق الويب قبل المتابعة.',
      enableTooltip: {
        description: 'لتمكين هذه الميزة، يرجى إضافة عقدة إدخال المستخدم إلى اللوحة. (قد تكون موجودة بالفعل في المسودة، وتصبح سارية المفعول بعد النشر)',
        learnMore: 'اعرف المزيد',
      },
      settings: {
        entry: 'الإعدادات',
        title: 'إعدادات تطبيق الويب',
        modalTip: 'إعدادات تطبيق الويب من جانب العميل. ',
        webName: 'اسم تطبيق الويب',
        webDesc: 'وصف تطبيق الويب',
        webDescTip: 'سيتم عرض هذا النص على جانب العميل، مما يوفر إرشادات أساسية حول كيفية استخدام التطبيق',
        webDescPlaceholder: 'أدخل وصف تطبيق الويب',
        language: 'اللغة',
        workflow: {
          title: 'سير العمل',
          subTitle: 'تفاصيل سير العمل',
          show: 'عرض',
          hide: 'إخفاء',
          showDesc: 'عرض أو إخفاء تفاصيل سير العمل في تطبيق الويب',
        },
        chatColorTheme: 'سمة لون الدردشة',
        chatColorThemeDesc: 'تعيين سمة لون روبوت الدردشة',
        chatColorThemeInverted: 'معكوس',
        invalidHexMessage: 'قيمة سداسية عشرية غير صالحة',
        invalidPrivacyPolicy: 'رابط سياسة الخصوصية غير صالح. يرجى استخدام رابط صالح يبدأ بـ http أو https',
        sso: {
          label: 'فرض تسجيل الدخول الموحد (SSO)',
          title: 'تسجيل الدخول الموحد لتطبيق الويب',
          description: 'يُطلب من جميع المستخدمين تسجيل الدخول باستخدام SSO قبل استخدام تطبيق الويب',
          tooltip: 'اتصل بالمسؤول لتمكين تسجيل الدخول الموحد لتطبيق الويب',
        },
        more: {
          entry: 'عرض المزيد من الإعدادات',
          copyright: 'حقوق النشر',
          copyrightTip: 'عرض معلومات حقوق النشر في تطبيق الويب',
          copyrightTooltip: 'يرجى الترقية إلى الخطة الاحترافية أو أعلى',
          copyRightPlaceholder: 'أدخل اسم المؤلف أو المنظمة',
          privacyPolicy: 'سياسة الخصوصية',
          privacyPolicyPlaceholder: 'أدخل رابط سياسة الخصوصية',
          privacyPolicyTip: 'يساعد الزوار على فهم البيانات التي يجمعها التطبيق، راجع <privacyPolicyLink>سياسة الخصوصية</privacyPolicyLink> لـ One Health.',
          customDisclaimer: 'إخلاء مسؤولية مخصص',
          customDisclaimerPlaceholder: 'أدخل نص إخلاء المسؤولية المخصص',
          customDisclaimerTip: 'سيتم عرض نص إخلاء المسؤولية المخصص على جانب العميل، مما يوفر معلومات إضافية حول التطبيق',
        },
      },
      embedded: {
        entry: 'مضمن',
        title: 'تضمين في الموقع',
        explanation: 'اختر طريقة تضمين تطبيق الدردشة في موقع الويب الخاص بك',
        iframe: 'لإضافة تطبيق الدردشة في أي مكان على موقع الويب الخاص بك، أضف هذا iframe إلى كود html الخاص بك.',
        scripts: 'لإضافة تطبيق دردشة إلى أسفل يمين موقع الويب الخاص بك، أضف هذا الكود إلى html الخاص بك.',
        chromePlugin: 'تثبيت ملحق One Health Chatbot Chrome',
        copied: 'تم النسخ',
        copy: 'نسخ',
      },
      qrcode: {
        title: 'رابط رمز الاستجابة السريعة',
        scan: 'مسح للمشاركة',
        download: 'تنزيل رمز الاستجابة السريعة',
      },
      customize: {
        way: 'طريقة',
        entry: 'تخصيص',
        title: 'تخصيص تطبيق ويب الذكاء الاصطناعي',
        explanation: 'يمكنك تخصيص الواجهة الأمامية لتطبيق الويب لتناسب السيناريو واحتياجات النمط الخاصة بك.',
        way1: {
          name: 'تفرع كود العميل، وقم بتعديله ونشره على Vercel (موصى به)',
          step1: 'تفرع كود العميل وقم بتعديله',
          step1Tip: 'انقر هنا لتفرع الكود المصدري إلى حساب GitHub الخاص بك وتعديل الكود',
          step1Operation: 'One Health-WebClient',
          step2: 'النشر على Vercel',
          step2Tip: 'انقر هنا لاستيراد المستودع إلى Vercel والنشر',
          step2Operation: 'استيراد المستودع',
          step3: 'تكوين متغيرات البيئة',
          step3Tip: 'أضف متغيرات البيئة التالية في Vercel',
        },
        way2: {
          name: 'اكتب كود من جانب العميل لاستدعاء API ونشره على خادم',
          operation: 'توثيق',
        },
      },
    },
    apiInfo: {
      title: 'واجهة برمجة تطبيقات خدمة الخلفية',
      explanation: 'مدمجة بسهولة في تطبيقك',
      accessibleAddress: 'نقطة نهاية خدمة API',
      doc: 'مرجع API',
    },
    triggerInfo: {
      title: 'المشغلات',
      explanation: 'إدارة مشغل سير العمل',
      triggersAdded: '{{count}} مشغلات مضافة',
      noTriggerAdded: 'لم يتم إضافة مشغل',
      triggerStatusDescription: 'تظهر حالة عقدة المشغل هنا. (قد تكون موجودة بالفعل في المسودة، وتصبح سارية المفعول بعد النشر)',
      learnAboutTriggers: 'تعرف على المشغلات',
    },
    status: {
      running: 'في الخدمة',
      disable: 'معطل',
    },
    disableTooltip: {
      triggerMode: 'ميزة {{feature}} غير مدعومة في وضع عقدة المشغل.',
    },
  },
  analysis: {
    title: 'تحليل',
    ms: 'مللي ثانية',
    tokenPS: 'رمز/ث',
    totalMessages: {
      title: 'إجمالي الرسائل',
      explanation: 'عدد تفاعلات الذكاء الاصطناعي اليومية.',
    },
    totalConversations: {
      title: 'إجمالي المحادثات',
      explanation: 'عدد محادثات الذكاء الاصطناعي اليومية؛ استبعاد هندسة الموجه/التصحيح.',
    },
    activeUsers: {
      title: 'المستخدمون النشطون',
      explanation: 'المستخدمون الفريدون الذين يشاركون في الأسئلة والأجوبة مع الذكاء الاصطناعي؛ استبعاد هندسة الموجه/التصحيح.',
    },
    tokenUsage: {
      title: 'استخدام الرموز',
      explanation: 'يعكس استخدام الرموز اليومي لنموذج اللغة للتطبيق، مفيد لأغراض التحكم في التكلفة.',
      consumed: 'مستهلك',
    },
    avgSessionInteractions: {
      title: 'متوسط تفاعلات الجلسة',
      explanation: 'عدد التواصل المستمر بين المستخدم والذكاء الاصطناعي؛ للتطبيقات القائمة على المحادثة.',
    },
    avgUserInteractions: {
      title: 'متوسط تفاعلات المستخدم',
      explanation: 'يعكس تكرار الاستخدام اليومي للمستخدمين. يعكس هذا المقياس التصاق المستخدم.',
    },
    userSatisfactionRate: {
      title: 'معدل رضا المستخدم',
      explanation: 'عدد الإعجابات لكل 1000 رسالة. يشير هذا إلى نسبة الإجابات التي يرضى عنها المستخدمون بشدة.',
    },
    avgResponseTime: {
      title: 'متوسط وقت الاستجابة',
      explanation: 'الوقت (مللي ثانية) الذي يستغرقه الذكاء الاصطناعي للمعالجة/الاستجابة؛ للتطبيقات القائمة على النص.',
    },
    tps: {
      title: 'سرعة إخراج الرموز',
      explanation: 'قياس أداء LLM. عد سرعة إخراج الرموز لـ LLM من بداية الطلب إلى اكتمال الإخراج.',
    },
  },
}

export default translation
