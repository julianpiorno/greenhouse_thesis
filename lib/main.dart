import 'package:flutter/material.dart';

void main() => runApp(GreenhouseApp());

class GreenhouseApp extends StatelessWidget {
  const GreenhouseApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Greenhouse App",
      home: Home(),
    );
  }
}

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Greenhouse App"),
      ),
      body: body(),
    );
  }
}

Widget body() {
  return Container(
    decoration: BoxDecoration(
        image: DecorationImage(
            image: NetworkImage(
                "https://github.com/julianpiorno/greenhouse_thesis/blob/master/assets/widget/UNQ.jpg"))),
  );
}
