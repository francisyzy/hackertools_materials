super.onCreate(savedInstanceState)
setContentView(R.layout.activity_second)
Intent intent = getIntent()
String text = intent.getStringExtra("text")

TextView view = findViewById(R.id.textView2)
view.setText(text)
