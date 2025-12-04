const translation = {
  creation: {
    backToKnowledge: 'العودة إلى المعرفة',
    createFromScratch: {
      title: 'خط أنابيب معرفة فارغ',
      description: 'قم بإنشاء خط أنابيب مخصص من البداية مع التحكم الكامل في معالجة البيانات وهيكلها.',
    },
    importDSL: 'استيراد من ملف DSL',
    createKnowledge: 'إنشاء معرفة',
    errorTip: 'فشل إنشاء قاعدة المعرفة',
    successTip: 'تم إنشاء قاعدة المعرفة بنجاح',
    caution: 'تحذير',
  },
  templates: {
    customized: 'مخصص',
  },
  operations: {
    choose: 'اختر',
    details: 'تفاصيل',
    editInfo: 'تحرير المعلومات',
    useTemplate: 'استخدم خط أنابيب المعرفة هذا',
    backToDataSource: 'العودة إلى مصدر البيانات',
    process: 'معالجة',
    dataSource: 'مصدر البيانات',
    saveAndProcess: 'حفظ ومعالجة',
    preview: 'معاينة',
    exportPipeline: 'تصدير خط الأنابيب',
    convert: 'تحويل',
  },
  knowledgeNameAndIcon: 'اسم المعرفة والرمز',
  knowledgeNameAndIconPlaceholder: 'يرجى إدخال اسم قاعدة المعرفة',
  knowledgeDescription: 'وصف المعرفة',
  knowledgeDescriptionPlaceholder: 'صف ما يوجد في قاعدة المعرفة هذه. يسمح الوصف التفصيلي للذكاء الاصطناعي بالوصول إلى محتوى مجموعة البيانات بدقة أكبر. إذا كان فارغًا، فسيستخدم One Health استراتيجية الضرب الافتراضية. (اختياري)',
  knowledgePermissions: 'الأذونات',
  editPipelineInfo: 'تحرير معلومات خط الأنابيب',
  pipelineNameAndIcon: 'اسم خط الأنابيب والرمز',
  deletePipeline: {
    title: 'هل أنت متأكد من حذف قالب خط الأنابيب هذا؟',
    content: 'حذف قالب خط الأنابيب لا رجعة فيه.',
  },
  publishPipeline: {
    success: {
      message: 'تم نشر خط أنابيب المعرفة',
      tip: '<CustomLink>انتقل إلى المستندات</CustomLink> لإضافة المستندات أو إدارتها.',
    },
    error: {
      message: 'فشل نشر خط أنابيب المعرفة',
    },
  },
  publishTemplate: {
    success: {
      message: 'تم نشر قالب خط الأنابيب',
      tip: 'يمكنك استخدام هذا القالب في صفحة الإنشاء.',
      learnMore: 'اعرف المزيد',
    },
    error: {
      message: 'فشل نشر قالب خط الأنابيب',
    },
  },
  exportDSL: {
    successTip: 'تم تصدير DSL لخط الأنابيب بنجاح',
    errorTip: 'فشل تصدير DSL لخط الأنابيب',
  },
  details: {
    createdBy: 'بواسطة {{author}}',
    structure: 'الهيكل',
    structureTooltip: 'يحدد هيكل القطعة كيفية تقسيم المستندات وفهرستها - مما يوفر أوضاعًا عامة وأب-ابن وسؤال وجواب - وهو فريد لكل قاعدة معرفة.',
  },
  testRun: {
    title: 'تشغيل اختباري',
    tooltip: 'في وضع التشغيل الاختباري، يُسمح باستيراد مستند واحد فقط في كل مرة لتسهيل التصحيح والمراقبة.',
    steps: {
      dataSource: 'مصدر البيانات',
      documentProcessing: 'معالجة المستندات',
    },
    dataSource: {
      localFiles: 'ملفات محلية',
    },
    notion: {
      title: 'اختر صفحات Notion',
      docTitle: 'مستندات Notion',
    },
  },
  inputField: 'حقل الإدخال',
  inputFieldPanel: {
    title: 'حقول إدخال المستخدم',
    description: 'تُستخدم حقول إدخال المستخدم لتعريف وجمع المتغيرات المطلوبة أثناء عملية تنفيذ خط الأنابيب. يمكن للمستخدمين تخصيص نوع الحقل وتكوين قيمة الإدخال بمرونة لتلبية احتياجات مصادر البيانات المختلفة أو خطوات معالجة المستندات.',
    uniqueInputs: {
      title: 'مدخلات فريدة لكل مدخل',
      tooltip: 'المدخلات الفريدة متاحة فقط لمصدر البيانات المحدد وعقده النهائية. لن يحتاج المستخدمون إلى ملئها عند اختيار مصادر بيانات أخرى. ستظهر فقط حقول الإدخال التي تشير إليها متغيرات مصدر البيانات في الخطوة الأولى (مصدر البيانات). ستظهر جميع الحقول الأخرى في الخطوة الثانية (معالجة المستندات).',
    },
    globalInputs: {
      title: 'مدخلات عالمية لجميع المداخل',
      tooltip: 'تتم مشاركة المدخلات العالمية عبر جميع العقد. سيحتاج المستخدمون إلى ملئها عند تحديد أي مصدر بيانات. على سبيل المثال، يمكن تطبيق حقول مثل المحدد والحد الأقصى لطول القطعة بشكل موحد عبر مصادر بيانات متعددة. تظهر فقط حقول الإدخال التي تشير إليها متغيرات مصدر البيانات في الخطوة الأولى (مصدر البيانات). تظهر جميع الحقول الأخرى في الخطوة الثانية (معالجة المستندات).',
    },
    addInputField: 'إضافة حقل إدخال',
    editInputField: 'تحرير حقل الإدخال',
    preview: {
      stepOneTitle: 'مصدر البيانات',
      stepTwoTitle: 'معالجة المستندات',
    },
    error: {
      variableDuplicate: 'اسم المتغير موجود بالفعل. يرجى اختيار اسم مختلف.',
    },
  },
  addDocuments: {
    title: 'إضافة مستندات',
    steps: {
      chooseDatasource: 'اختر مصدر بيانات',
      processDocuments: 'معالجة المستندات',
      processingDocuments: 'جارٍ معالجة المستندات',
    },
    backToDataSource: 'مصدر البيانات',
    stepOne: {
      preview: 'معاينة',
    },
    stepTwo: {
      chunkSettings: 'إعدادات القطع',
      previewChunks: 'معاينة القطع',
    },
    stepThree: {
      learnMore: 'اعرف المزيد',
    },
    characters: 'أحرف',
    selectOnlineDocumentTip: 'معالجة ما يصل إلى {{count}} صفحة',
    selectOnlineDriveTip: 'معالجة ما يصل إلى {{count}} ملف، بحد أقصى {{fileSize}} ميجابايت لكل منها',
  },
  documentSettings: {
    title: 'إعدادات المستند',
  },
  onlineDocument: {
    pageSelectorTitle: '{{name}} صفحات',
  },
  onlineDrive: {
    notConnected: '{{name}} غير متصل',
    notConnectedTip: 'للمزامنة مع {{name}}، يجب إنشاء اتصال بـ {{name}} أولاً.',
    breadcrumbs: {
      allBuckets: 'جميع دلاء التخزين السحابي',
      allFiles: 'جميع الملفات',
      searchResult: 'العثور على {{searchResultsLength}} عنصر في مجلد "{{folderName}}"',
      searchPlaceholder: 'بحث في الملفات...',
    },
    notSupportedFileType: 'نوع الملف هذا غير مدعوم',
    emptyFolder: 'هذا المجلد فارغ',
    emptySearchResult: 'لم يتم العثور على أي عناصر',
    resetKeywords: 'إعادة تعيين الكلمات الرئيسية',
  },
  credentialSelector: {
    name: '{{pluginName}} الخاص بـ {{credentialName}}',
  },
  configurationTip: 'تكوين {{pluginName}}',
  conversion: {
    title: 'تحويل إلى خط أنابيب المعرفة',
    descriptionChunk1: 'يمكنك الآن تحويل قاعدة المعرفة الحالية الخاصة بك لاستخدام خط أنابيب المعرفة لمعالجة المستندات',
    descriptionChunk2: ' — نهج أكثر انفتاحًا ومرونة مع الوصول إلى المكونات الإضافية من سوقنا. سيطبق هذا طريقة المعالجة الجديدة على جميع المستندات المستقبلية.',
    warning: 'لا يمكن التراجع عن هذا الإجراء.',
    confirm: {
      title: 'تأكيد',
      content: 'هذا الإجراء دائم. لن تتمكن من العودة إلى الطريقة السابقة. يرجى التأكيد للتحويل.',
    },
    errorMessage: 'فشل تحويل مجموعة البيانات إلى خط أنابيب',
    successMessage: 'تم تحويل مجموعة البيانات بنجاح إلى خط أنابيب',
  },
}

export default translation
