import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Alert, Modal } from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

const Screen1 = ( {navigation} ) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    showAlert();
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const [isModalVisible1, setIsModalVisible1] = useState(false);

  const toggleModal1 = () => {
    setIsModalVisible1(!isModalVisible1);
  };

  const showAlert = () => {
    Alert.alert(
      '"Shopertino" Would Like To Send You Notifications',
      'Notifications may include alerts, sounds and icon badges. These can be configured in Settings',
      [
        { text: 'Dont Allow', onPress: () => console.log('Dont Allow pressed') },
        { text: 'OK', onPress: () => console.log('OK pressed') },
      ],
      { cancelable: true }
    );
  };

  drawerContent = () => {
    return (
      <TouchableOpacity onPress={closeDrawer} style={styles.animatedBox}>
        <Icon name="bars" size={24} color="black" style={{paddingHorizontal: 15, paddingVertical: 2, paddingBottom:70}} />
        

      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleDrawer}>
          <Icon name="bars" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartButton}>
          <Image source={require('../assets/Shoppingbag.png')} />
        </TouchableOpacity>
      </View>

      <MenuDrawer
          open={isDrawerOpen}
          position={'left'}
          drawerContent={this.drawerContent()}
          drawerPercentage={80}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
        </MenuDrawer>
        <ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.categoriesItem}>
            <Image style= {styles.categoriesimage} source={require('../assets/CategoriesSlider/1.png')}/>
            <Image style= {styles.categoriesimage} source={require('../assets/CategoriesSlider/2.png')}/>
            <Image style= {styles.categoriesimage} source={require('../assets/CategoriesSlider/3.png')}/>
        </View>
        </ScrollView>
        <View style={styles.newArrivalContainer}>
          <Text style={styles.newArrivalText}>New Arrivals</Text>
          <TouchableOpacity onPress={toggleModal}>
        <Image style={styles.newArrivalImage} source={require('../assets/NewArrival.png')} />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {}}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Icon name="times" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.drawerItems}>
              <TouchableOpacity style={styles.drawerItem} onPress={() => {}}>
              <Image style={styles.newArrivalImage} source={require('../assets/ChiTiet.png')} />             
              </TouchableOpacity>
              <Text style={{fontSize: 20,fontWeight: 'bold'}}>Sweet Never Salty Mini Dress</Text>
              <Text style={{fontSize: 15,color: 'gray',}}>$34.99</Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.buttonAdd}>
                    <Text style={styles.buttonAddText}>ADD TO BAG</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonPay} onPress={toggleModal}>
                    <Image style={{marginTop:13}} source={require('../assets/Apple.png')}/>
                    <Text style={styles.buttonPayText}>PAY</Text>
                </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible1}
        onRequestClose={() => {}}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal1}>
              <Icon name="times" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.drawerItems}>
              <TouchableOpacity style={styles.drawerItem} onPress={() => {}}>
                <Text style={styles.drawerItemText}>Item 1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerItem} onPress={() => {}}>
                <Text style={styles.drawerItemText}>Item 2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerItem} onPress={() => {}}>
                <Text style={styles.drawerItemText}>Item 3</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

                
              </View>
            </View>
          </View>
        </View>
      </Modal>
          <Text style={styles.newArrivalTextItem}>Sweet Never Salty Mini Dress</Text>
          <Text style={styles.newArrivalTextPrice}>$34.99</Text>
        </View>
        <View>
        <Text style={styles.FeaturedText}>Featured</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.featuredItem}>
              <Image style={styles.categoriesimage} source={require('../assets/Featured/1.png')} />
            </View>
            <View style={styles.featuredItem}>
              <Image style={styles.categoriesimage} source={require('../assets/Featured/2.png')} />
            </View>
            <View style={styles.featuredItem}>
              <Image style={styles.categoriesimage} source={require('../assets/Featured/3.png')} />
            </View>
          </ScrollView>
        </View>
        <View>
        <Text style={styles.BestSellerText}>Best Seller</Text>
        <View style={styles.row}>
          <View style={styles.imageWrapper}>
            <Image style={styles.BestSellerImage} source={require('../assets/BestSeller/1.png')} />
          </View>
          <View style={styles.imageWrapper}>
            <Image style={styles.BestSellerImage} source={require('../assets/BestSeller/2.png')} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.imageWrapper}>
            <Image style={styles.BestSellerImage} source={require('../assets/BestSeller/3.png')} />
          </View>
          <View style={styles.imageWrapper}>
            <Image style={styles.BestSellerImage} source={require('../assets/BestSeller/4.png')} />
          </View>
        </View>
        </View>
        <TouchableOpacity
        style={styles.buttonbrowse}
      >
        <Text style={styles.buttonbrowseText}>Browse All</Text>
      </TouchableOpacity>
        </ScrollView>
              
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  menuButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  animatedBox: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  categoriesimage: {
    margin: 7, 
  },
  categoriesItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,  
    paddingRight: 10,  
  },
  newArrivalContainer: {
    alignItems: 'center',
    paddingTop: 15,
  },
  newArrivalText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 15,
  },
  newArrivalImage: {
    alignItems: 'center',
    paddingTop: 15,
  },
  newArrivalTextItem: {
    fontSize: 13,
    textAlign: 'center',
    paddingTop: 15,
  },
  newArrivalTextPrice: {
    fontSize: 15,
    textAlign: 'center',
    color: 'gray',
  },
  FeaturedText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingBottom: 15,
    paddingLeft: 12,
  },
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  featuredItem: {
    marginRight: 10,
  },
  BestSellerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingBottom: 15,
    paddingLeft: 12,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15, 
  },
  imageWrapper: {
    flex: 1,
    marginRight: 15, 
  },
  BestSellerImage: {
    marginLeft:13,
  },
  buttonbrowse: {
    width: 370,
    height: 50,
    borderRadius: 8,
    backgroundColor: "white",
    justifyContent: 'center',
    borderWidth: 2,
    marginLeft:11,
    marginBottom:5,
  },
  buttonbrowseText: {
    textAlign: 'center',
    color: 'black',   
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  drawerItems: {
    marginTop: 20,
  },
  drawerItem: {
    marginBottom: 20,
  },
  drawerItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonAdd: {
    width: 150,
    height: 50,
    borderRadius: 8,
    backgroundColor: "black",
    justifyContent: 'center',
    marginRight: 50,
  },
  buttonPay: {
    flexDirection: 'row',
    width: 150,
    height: 50,
    borderRadius: 8,
    backgroundColor: "white",
    justifyContent: 'center',
    borderWidth: 2,
    marginBottom:15,
  },
  buttonAddText: {
    textAlign: 'center',
    color: 'white',
  },
  buttonPayText:{
    textAlign: 'center',
    color: 'black',
    paddingTop:13,
  },
});

export default Screen1;
