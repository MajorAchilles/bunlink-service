#!/bin/bash

# Script to create ovpnmanager user without a password and configure passwordless sudo for OpenVPN

# Automatically determine the path to OpenVPN
OPENVPN_PATH=$(which openvpn)

# Check if OpenVPN is installed
if [ -z "$OPENVPN_PATH" ]; then
    echo "OpenVPN is not installed or not found in the PATH."
    exit 1
fi

# Function to create the ovpnmanager user without a password
create_ovpnmanager_user() {
    sudo adduser --system --no-create-home --disabled-login --disabled-password ovpnmanager
}

# Function to configure passwordless sudo for OpenVPN
configure_sudo() {
    # Creating a temporary file
    TMP_FILE=$(mktemp)

    # Writing the configuration to the temporary file
    echo "ovpnmanager ALL=(ALL) NOPASSWD: $OPENVPN_PATH" > "$TMP_FILE"

    # Delete the existing configuration file if it exists
    sudo rm -f /etc/sudoers.d/ovpnmanager

    # Moving the temporary file to sudoers.d directory
    sudo mv "$TMP_FILE" /etc/sudoers.d/ovpnmanager

    # Setting appropriate permissions
    sudo chmod 0440 /etc/sudoers.d/ovpnmanager
}

# Main script execution
create_ovpnmanager_user
configure_sudo

echo "Setup complete."
