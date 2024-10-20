import { HouseSimple, SquaresFour, User } from 'phosphor-react-native';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image, Animated, TouchableWithoutFeedback } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import logoImg from '@assets/teddy-logo.png';

interface DrawerModalProps {
  visible: boolean;
  onClose: () => void;
  selected: 'clients' | 'myClients' | 'products';
}

const DrawerModal = ({ visible, onClose, selected }: DrawerModalProps) => {
  const slideAnim = useRef(new Animated.Value(300)).current;

  const navigate = useNavigation();

  const [selectedItem, setSelectedItem] = useState<string | null>();

  useFocusEffect(
    useCallback(() => {
      setSelectedItem(selected);
    }, [selected])
  );

  const handleSelect = (item: string) => {
    setSelectedItem(item);

    if (item === 'myClients') {
      navigate.navigate('myClients');
    }

    if (item === 'clients') {
      navigate.navigate('clients');
    }
  };

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 300,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, slideAnim]);

  return (
    <Modal visible={visible} animationType="none" transparent onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <>
              <Animated.View style={[styles.logoContainer, { transform: [{ translateX: slideAnim }] }]}>
                <Image source={logoImg} style={styles.logo} />
              </Animated.View>
              <Animated.View style={[styles.drawerContent, { transform: [{ translateX: slideAnim }] }]}>
                <View style={{ gap: 30 }}>
                  <TouchableOpacity onPress={() => handleSelect('clients')} style={styles.itemContainer}>
                    <HouseSimple size={20} weight='fill' color={selectedItem === 'clients' ? '#EE7D46' : 'black'} />
                    <Text style={[styles.text, selectedItem === 'clients' && styles.selectedText]}>Home</Text>
                    {selectedItem === 'clients' && <View style={styles.verticalLine} />}
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleSelect('myClients')} style={styles.itemContainer}>
                    <User size={20} weight='fill' color={selectedItem === 'myClients' ? '#EE7D46' : 'black'} />
                    <Text style={[styles.text, selectedItem === 'myClients' && styles.selectedText]}>Clientes</Text>
                    {selectedItem === 'myClients' && <View style={styles.verticalLine} />}
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleSelect('products')} style={styles.itemContainer}>
                    <SquaresFour size={20} weight='fill' color={selectedItem === 'products' ? '#EE7D46' : 'black'} />
                    <Text style={[styles.text, selectedItem === 'products' && styles.selectedText]}>Produtos</Text>
                    {selectedItem === 'products' && <View style={styles.verticalLine} />}
                  </TouchableOpacity>
                </View>
              </Animated.View>
            </>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    width: '80%',
    height: '20%',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 50,
  },
  drawerContent: {
    width: '80%',
    height: '85%',
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
  },
  selectedText: {
    color: '#EE7D46',
  },
  verticalLine: {
    position: 'absolute',
    right: -10,
    width: 2,
    height: '100%',
    backgroundColor: '#EE7D46',
  },
});

export default DrawerModal;