import { HouseSimple, SquaresFour, User } from 'phosphor-react-native';
import React, { useRef, useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';

import logoImg from '@assets/teddy-logo.png';

interface DrawerModalProps {
  visible: boolean;
  onClose: () => void;
}

const DrawerModal = ({ visible, onClose }: DrawerModalProps) => {
  const slideAnim = useRef(new Animated.Value(300)).current;

  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelect = (item: string) => {
    setSelectedItem(item);
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
      <View style={styles.modalOverlay}>
        <Animated.View style={[styles.logoContainer, { transform: [{ translateX: slideAnim }] }]}>
          <Image source={logoImg} style={styles.logo} />
        </Animated.View>
        <Animated.View style={[styles.drawerContent, { transform: [{ translateX: slideAnim }] }]}>
          <View style={{ gap: 30 }}>
            <TouchableOpacity onPress={() => handleSelect('home')} style={styles.itemContainer}>
              <HouseSimple size={20} weight='fill' color={selectedItem === 'home' ? '#EE7D46' : 'black'} />
              <Text style={[styles.text, selectedItem === 'home' && styles.selectedText]}>Home</Text>
              {selectedItem === 'home' && <View style={styles.verticalLine} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSelect('clientes')} style={styles.itemContainer}>
              <User size={20} weight='fill' color={selectedItem === 'clientes' ? '#EE7D46' : 'black'} />
              <Text style={[styles.text, selectedItem === 'clientes' && styles.selectedText]}>Clientes</Text>
              {selectedItem === 'clientes' && <View style={styles.verticalLine} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSelect('produtos')} style={styles.itemContainer}>
              <SquaresFour size={20} weight='fill' color={selectedItem === 'produtos' ? '#EE7D46' : 'black'} />
              <Text style={[styles.text, selectedItem === 'produtos' && styles.selectedText]}>Produtos</Text>
              {selectedItem === 'produtos' && <View style={styles.verticalLine} />}
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
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